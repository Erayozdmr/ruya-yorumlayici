export async function POST(req) {
  try {
    const { ruya } = await req.json();

    console.log("🎯 Gelen rüya:", ruya);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Lütfen aşağıdaki rüyayı tamamen TÜRKÇE asla başka dil olmayacak şekilde , ayrıntılı ve detaylı şekilde yorumla. VE KESİNLİKLE TÜRKÇE OLSUN\nRüya: "${ruya}"`,

          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("🛑 OpenRouter Hatası:", error);
      return new Response(JSON.stringify({ yorum: "Yorum alınamadı." }), {
        status: 200,
      });
    }

    const data = await response.json();

    console.log("🧠 OpenRouter cevabı:", data);
    console.log("message objesi:", JSON.stringify(data.choices?.[0]?.message, null, 2));

    // Burada güvenli şekilde içerik alalım:
    let yorum = "Yorum alınamadı.";

    if (data.choices?.[0]) {
      const choice = data.choices[0];
      if (choice.message && choice.message.content) {
        yorum = choice.message.content;
      } else if (choice.text) {
        yorum = choice.text;
      }
    }

    console.log("💬 Yorum:", yorum);

    return new Response(JSON.stringify({ yorum }), { status: 200 });

  } catch (error) {
    console.error("❌ Sunucu hatası:", error.message);
    return new Response(JSON.stringify({ error: "Sunucu hatası: " + error.message }), {
      status: 500,
    });
  }
}
