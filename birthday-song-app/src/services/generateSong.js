import Axios from "../utils/axios";

export const generateSongWithGPT = async (name, gender, genre) => {
  const genreOfSong = genre || "rap";
  const dedicatedTo =
    gender == "male" ? "him" : gender == "female" ? "her" : "male";
  const dedicatedFor =
    gender == "male" ? "his" : gender == "female" ? "her" : "male";
  const promptText = `Ensure that "Happy birthday" is mentioned at least twice in the lyrics, and it should rhyme. The lyrics should use simple, short, and easy to pronounce words as much as possible.
  Using the above information, please write 16 lines of ${genreOfSong} lyrics that I can dedicate to ${dedicatedTo} for ${dedicatedFor} birthday.  Each line can have maximum of 8 words or 40 characters.
  The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organisation or any entity or individual in any manner whatsoever. Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided. 
  `;
  const systemMessage = {
    role: "system",
    content: `Wish a happy Birthday to ${name}`,
  };

  const userMessage = { role: "user", content: promptText };

  try {
    const response = await Axios.post(
      "chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [systemMessage, userMessage],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY_4}`,
        },
      }
    );

    if (
      response.data &&
      response.data.choices &&
      response.data.choices.length > 0
    ) {
      const generatedText = response.data.choices[0].message;
      return generatedText;
    } else {
      return "No Song Generated, Please, Try Again";
    }
  } catch (error) {
    console.error("Error:", error);
    return "Error fetching data";
  }
};
