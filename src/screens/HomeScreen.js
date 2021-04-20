import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Typography,
  Container,
  Button,
  Select,
  MenuItem,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  makeStyles,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    width: 200,
  },
});
function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      {category && <Typography variant="h2">{category}</Typography>}

      <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <TextField
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <Button color="secondary" variant="contained" type="submit">
              Search
            </Button>
          </form>
        </li>
        <li>
          Sort By
          <Select
            name="sortOrder"
            onChange={sortHandler}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="lowest">Lowest</MenuItem>
            <MenuItem value="highest">Highest</MenuItem>
          </Select>
        </li>
      </ul>
            

      <div className="container py-5">
  <header className="text-center mb-5">
    <h1 className="display-4 font-weight-bold">Life Educational Point</h1>
    <p className="font-italic text-muted mb-0">An Easy way to purchase Stationery Items Online.</p>
    </header>
</div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
         <ul className="products">
          {products.map((product) => (
           
           <Card key={product._id}>
              <CardActionArea>
                <img
                  src={product.image}
                  title={product.name}
                  width={"225px"}
                  height={"250px"}

    
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    {product.name}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="h5">
                    {product.brand}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h5">
                    Rs.{product.price}
                  </Typography>
                  <Rating
                    value={product.rating}
                    text={product.numReviews + " reviews"}
                  />
                </CardContent>
              </CardActionArea>
              
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={"/product/" + product._id}>{product.name}</Link>
                </Button>
              </CardActions>
            </Card>
          ))}
        </ul> 
      )}
      
      <div className="container">
  <div className="row">
    <div className="col-md-12">
      <h2>Trending <b>Products</b></h2>
      <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>
        {/* Carousel indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>   
        {/* Wrapper for carousel items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="https://pngimg.com/uploads/calculator/calculator_PNG102245.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Calculator </h4>
                    <p className="item-price"><strike>Rs. 400.00</strike> <span>Rs. 369.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="cart.html" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="https://pngimg.com/uploads/pen/pen_PNG7417.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Pen</h4>
                    <p className="item-price"><strike>Rs. 25.00</strike> <span>Rs. 23.99</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="cart.html" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>		
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="https://pngimg.com/uploads/notebook/notebook_PNG19207.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Notebook</h4>
                    <p className="item-price"><strike>Rs. 500.00</strike> <span>$230.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>								
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="https://pngimg.com/uploads/football/football_PNG1087.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Football</h4>
                    <p className="item-price"><strike>Rs. 1000.00</strike> <span>Rs. 750.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="http://pngimg.com/uploads/basketball/basketball_PNG1104.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Basketball</h4>
                    <p className="item-price"><strike>Rs.1500</strike> <span>Rs. 1200</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="https://e7.pngegg.com/pngimages/64/486/png-clipart-box-office-supplies-magazine-stationery-hole-paper-miscellaneous-cardboard.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>File</h4>
                    <p className="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="http://pngimg.com/uploads/tennis/tennis_PNG10421.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Tennis</h4>
                    <p className="item-price"><strike>Rs.2000.00</strike> <span>Rs.1500.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="http://pngimg.com/uploads/stapler/stapler_PNG85.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Stapler</h4>
                    <p className="item-price"><strike>$599.00</strike> <span>$569.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>						
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="http://pngimg.com/uploads/notebook/notebook_PNG100056.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Notebook</h4>
                    <p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="http://pngimg.com/uploads/chess/chess_PNG8449.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Chess</h4>
                    <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="http://pngimg.com/uploads/eraser/eraser_PNG51.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Eraser</h4>
                    <p className="item-price"><strike>$450.00</strike> <span>$418.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>	
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img src="http://pngimg.com/uploads/pencil/pencil_PNG3853.png" className="img-fluid" alt />
                  </div>
                  <div className="thumb-content">
                    <h4>Color Pencil</h4>
                    <p className="item-price"><strike>$350.00</strike> <span>$330.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star" /></li>
                        <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel controls */}
        <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i className="fa fa-angle-left" />
        </a>
        <a className="carousel-control-next" href="#myCarousel" data-slide="next">
          <i className="fa fa-angle-right" />
        </a>
      </div>
    </div>
  </div>
</div>
    </Container>
  );
}
export default HomeScreen;
