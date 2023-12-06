import LandingPageImg from "../../assets/images/celebrations-hashtag.png";

function LandingPage() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-2">
        <img src={LandingPageImg} />
        <p className="font-dairy-milk text-center font-normal text-lg">
          A unique birthday song for everyone!
        </p>
        <p className="font-dairy-milk text-center font-light text-base italic mt-1.5">
          इस Birthday , कुछ अच्छा हो जाए, कुछ मीठा हो जाए।
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
