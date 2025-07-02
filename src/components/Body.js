import restrautList from "../utils/mockData";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restrautList.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

export default Body;