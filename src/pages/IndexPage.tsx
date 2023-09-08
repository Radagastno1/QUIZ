import CardMUI from "../components/CardMUI";

const card1 = {
  image: "https://i.imgur.com/eUaGdER.png",
  title: "Testa din kunskap",
  description: "Svara på 10 frågor och hamna på topplistan",
  buttonText: "QUIZ",
  path: "quiz",
};
const card2 = {
  image: "https://i.imgur.com/9X5W9pG.jpg",
  title: "Veggie-mat",
  description: "Kolla in våra smaskiga och gröna recept!",
  buttonText: "Laga mat",
  path: "food",
};
const card3 = {
  image: "https://i.imgur.com/YhzwBoy.jpg",
  title: "Ge ditt stöd",
  description: "Alla kan göra något för djuren. Kolla tipsen!",
  buttonText: "Läs mer",
  path: "support",
};

const containerStyle = {
  backgroundImage:
    'url("https://img.freepik.com/premium-photo/hobbit-village-houses-with-round-doors-windows-roofs-houses-are-covered-with-grass-world-lord-rings-3d-illustration_86390-8234.jpg?w=1380")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "75% 10%",
  height: "400px",
};

export default function IndexPage() {
  return (
    <div className="flex justify-evenly items-center" style={containerStyle}>
      <CardMUI
        image={card1.image}
        title={card1.title}
        description={card1.description}
        buttonText={card1.buttonText}
        path={card1.path}
      />
      <CardMUI
        image={card2.image}
        title={card2.title}
        description={card2.description}
        buttonText={card2.buttonText}
        path={card2.path}
      />
      <CardMUI
        image={card3.image}
        title={card3.title}
        description={card3.description}
        buttonText={card3.buttonText}
        path={card3.path}
      />
    </div>
  );
}
