import React, { useEffect, useRef } from "react";
import Matter, {
  Engine,
  Render,
  Bodies,
  Mouse,
  MouseConstraint,
  World,
  Runner,
  Composite,
  IRendererOptions,
} from "matter-js";
import { useAppContext } from "../AppContext";
import "animate.css";

const SkillsPage: React.FC = () => {
  const { textColorHEX, decorColorHEX } = useAppContext();

  const sceneRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef(Engine.create());

  useEffect(() => {
    const engine = engineRef.current;
    const world = engine.world;

    const width =
      window.innerWidth <= 540
        ? window.innerWidth - 50
        : window.innerWidth <= 850
        ? window.innerWidth - 150
        : window.innerWidth - 400;
    const height = window.innerWidth <= 900 ? 500 : 700;

    if (!sceneRef.current) return;

    const render: Render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      } as IRendererOptions,
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Стены-коробка
    const thickness = 100;
    const walls = [
      Bodies.rectangle(
        width / 2,
        -thickness / 2,
        width + thickness * 2,
        thickness,
        { isStatic: true }
      ), // потолок
      Bodies.rectangle(
        width / 2,
        height + thickness / 2,
        width + thickness * 2,
        thickness,
        { isStatic: true }
      ), // пол
      Bodies.rectangle(
        -thickness / 2,
        height / 2,
        thickness,
        height + thickness * 2,
        { isStatic: true }
      ), // левая
      Bodies.rectangle(
        width + thickness / 2,
        height / 2,
        thickness,
        height + thickness * 2,
        { isStatic: true }
      ), // правая
    ];
    World.add(world, walls);

    // Текстовые блоки с разным frictionAir
    const texts = [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "PHP",
      "WORDPRES",
    ];
    const textBodies = texts.map((text, index) => {
      const x = window.innerWidth / 3.5;
      const y = 100 + index * 80;

      return Bodies.rectangle(x, y, 160, 50, {
        frictionAir: 0.01 + index * 0.01,
        friction: 0.3,
        restitution: 0.2,
        density: 0.002,
        render: {
          sprite: {
            texture: createTextTexture(text),
            xScale: 1,
            yScale: 1,
          },
        },
      });
    });
    World.add(world, textBodies);

    // Мышка
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    World.add(world, mouseConstraint);
    render.mouse = mouse;

    // Камера — подогнать сцену
    Matter.Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: width, y: height },
    });

    // Очистка
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  // Текст в изображение
  function createTextTexture(text: string): string {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return "";

    ctx.font = `${
      window.innerWidth <= 400
        ? "24px"
        : window.innerWidth <= 850
        ? "32px"
        : window.innerWidth <= 1024
        ? "48px"
        : "64px"
    }wadik`;
    const textWidth = ctx.measureText(text).width;
    canvas.width = textWidth + 850;
    canvas.height = 100;

    ctx.font = `${
      window.innerWidth <= 400
        ? "24px"
        : window.innerWidth <= 850
        ? "32px"
        : window.innerWidth <= 1024
        ? "48px"
        : "64px"
    } wadik`;
    ctx.fillStyle = textColorHEX;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL();
  }

  return (
    <div
      className="page page__skills"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      <h1
        className="text-block__title wrap animate__animated animate__flipInX animate__fast"
        style={{
          color: textColorHEX,
          textShadow: `7px 3px 5px ${decorColorHEX}`,
        }}
      >
        Мой стэк
      </h1>
      <div ref={sceneRef} style={{ position: "absolute", top: 0, left: 0 }} />
    </div>
  );
};

export default SkillsPage;
