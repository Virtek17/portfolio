// utils/sendTelegramMessage.ts

const TOKEN = "7306490783:AAGzLe1c-VEV7IEt3_L-h1PpbbdRXBeeiRA"; // токен твоего бота
const CHAT_ID = "682028751"; // твой chat_id
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const sendTelegramMessage = async (message: string) => {
  try {
    const response = await fetch(TELEGRAM_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error("Ошибка при отправке в Telegram");
    }

    return true;
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
    return false;
  }
};
