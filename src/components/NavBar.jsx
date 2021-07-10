import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({categories}) => {
    
   return (
    <div style={{ height: "75px" }}>
      {categories.map((cat) => (
        <Link
          key={cat.id}
          to={"/" + cat.id}
          style={{ textDecoration: "none", margin: "5px" }}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state,
});
export default connect(mapStateToProps)(Navbar);
