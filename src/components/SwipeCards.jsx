import TinderCard from "react-tinder-card";
import SwipeCardElements from "./constants/SwipeCardElements";
// ...
const SwipeCards = () => {
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the Screen! ");
  };

  return (
    // <TinderCard
    //   onSwipe={onSwipe}
    //   onCardLeftScreen={() => onCardLeftScreen("fooBar")}
    //   preventSwipe={["right", "left"]}
    // >
    //   Hello, World!
    // </TinderCard>

    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {SwipeCardElements.map((item) => (
          <TinderCard
            className="swipe"
            key={item.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, item.id)}
            onCardLeftScreen={() => outOfFrame(item.id)}
          >
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="card"
            ></div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};
export default SwipeCards;
