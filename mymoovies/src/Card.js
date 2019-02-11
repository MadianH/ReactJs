class Card extends Component {
  constructor(){
    super();
    this.clickLike=this.clickLike.bind(this)
    this.state={
      classLike: "disLike",
      like: false
    }
}

clickLike(){
  if (this.state.like == false) {
    this.props.handleClickParent(this.state.like, this.props.name)
    this.setState({
      classLike: "like",
      like: true
    })
  } else if(this.state.like == true){
    this.props.handleClickParent(this.state.like, this.props.name)
    this.setState({
      classLike: "disLike",
      like: false
    })
  }
}

  render() {
    var isDisplay;
    if (this.props.displayOnlyLike && this.state.like == false) {
      isDisplay = "none col-3"
    }
    return (
      <div className={isDisplay}>
        <Card>
          <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
          <CardBody className="moovieCard">
            <FontAwesomeIcon onClick={this.clickLike} icon={ faHeart } className={this.state.classLike} />
            <CardTitle>{this.props.name}</CardTitle>
            <CardText>{this.props.description}</CardText>
          </CardBody>
        </Card>
      </div>
     );
   }
}

export default Card;
