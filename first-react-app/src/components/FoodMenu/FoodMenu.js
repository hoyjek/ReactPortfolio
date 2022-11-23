import "./FoodMenu.css";
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menuContainers = [...document.querySelectorAll(".menu-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

menuContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
const FoodMenu = () => {
  return (
    <section className="menu" id="menu">
      <h2 className="menu-category">
        <span>M</span>enu
      </h2>
      <button className="pre-btn">
        <img src={require("../../public/assets/arrow.png")} />
      </button>
      <button className="nxt-btn">
        <img src={require("../../public/assets/arrow.png")} />
      </button>
      <div className="menu-container">
        <div className="menu-card">
          <div className="menu.image">
            <img
              src={require("../../public/assets/card1.jpg")}
              className="menu-thumb"
            />
          </div>
          <div className="menu-info">
            <h2 className="dish-name">menu name</h2>
            <p className="dish-description">describe dish</p>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu.image">
            <img
              src={require("../../public/assets/card2.jpg")}
              className="menu-thumb"
            />
          </div>
          <div className="menu-info">
            <h2 className="dish-name">menu name</h2>
            <p className="dish-description">describe dish</p>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu.image">
            <img
              src={require("../../public/assets/card3.jpg")}
              className="menu-thumb"
            />
          </div>
          <div className="menu-info">
            <h2 className="dish-name">menu name</h2>
            <p className="dish-description">describe dish</p>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu.image">
            <img
              src={require("../../public/assets/card4.jpg")}
              className="menu-thumb"
            />
          </div>
          <div className="menu-info">
            <h2 className="dish-name">menu name</h2>
            <p className="dish-description">describe dish</p>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu.image">
            <img
              src={require("../../public/assets/card5.jpg")}
              className="menu-thumb"
            />
          </div>
          <div className="menu-info">
            <h2 className="dish-name">menu name</h2>
            <p className="dish-description">describe dish</p>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu.image">
            <img
              src={require("../../public/assets/card6.jpg")}
              className="menu-thumb"
            />
          </div>
          <div className="menu-info">
            <h2 className="dish-name">menu name</h2>
            <p className="dish-description">describe dish</p>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu.image">
            <img
              src={require("../../public/assets/card7.jpg")}
              className="menu-thumb"
            />
          </div>
          <div className="menu-info">
            <h2 className="dish-name">menu name</h2>
            <p className="dish-description">describe dish</p>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu.image">
            <img
              src={require("../../public/assets/card8.jpg")}
              className="menu-thumb"
            />
          </div>
          <div className="menu-info">
            <h2 className="dish-name">menu name</h2>
            <p className="dish-description">describe dish</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FoodMenu;
