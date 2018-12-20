import React, { Component } from 'react';
import logo from './logo.png';
//import thumb from './thumb.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle} from 'reactstrap';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Badge } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickLikeOn = this.handleClickLikeOn.bind(this);
    this.handleClickLikeOff = this.handleClickLikeOff.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      popoverOpen: false,
      viewOnlyLike: false,
      mooviesCount: 0,
      moviesNameList: []
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  handleClickLikeOn(){
    this.setState({
      viewOnlyLike: true
    });
  }

  handleClickLikeOff(){
    this.setState({
      viewOnlyLike: false
    });
  }

  handleClick(isLike, moovieName){
    var isLike = isLike
    if(isLike == true){
      this.setState({
      mooviesCount: this.state.mooviesCount-1
      });
    } else if(isLike == false){
        var moviesNameListCopy = this.state.moviesNameList.concat()
        moviesNameListCopy.push(moovieName)
        this.setState({
        mooviesCount: this.state.mooviesCount+1,
        moviesNameList: moviesNameListCopy
        });
      }
  }

  render() {

    var dataFilm=[{name:"Django", img: "thumb.jpg", description: "blablabli"},
                  {name:"Momie", img: "thumb.jpg", description: "blablabli"},
                  {name:"Five", img: "thumb.jpg", description: "blablabli"},
                  {name:"Nuit", img: "thumb.jpg", description: "blablabli"},
                  {name:"Jour", img: "thumb.jpg", description: "blablabli"},
                  {name:"The", img: "thumb.jpg", description: "blablabli"},
                  {name:"Merci", img: "thumb.jpg", description: "blablabli"},
     ]

    // var lastNameCopy = this.state.moviesNameList
    // var lastNameRevers = lastNameCopy.reverse()
    // var lastName;




    // if(this.state.moviesNameList.length == 0){
    //    lastName = "Aucun film"
    // } else if(this.state.moviesNameList.length == 1){
    //   lastName = lastNameRevers
    //  }
    // else if (this.state.moviesNameList.length > 1 && lastNameRevers.length == 2){
    //
    // }




    var handleClick = this.handleClick
    var displayOnlyLike = this.state.viewOnlyLike
    var filmList = dataFilm.map(function(film, i){
    return  <Film handleClickParent={handleClick} name={film.name} img={film.img} description={film.description} displayOnlyLike={displayOnlyLike} />
    })


    return (
      <div className="container-fluid">
        <div className="row">
          <div className="header col-12">
            <div className="row">
              <div className="col-1">
                <img src={logo} />
              </div>
              <div className="col-1">
                <a onClick={this.handleClickLikeOff} href="#">Last release</a>
              </div>
              <div className="col-1">
                <a onClick={this.handleClickLikeOn} href="#">My moovies</a>
              </div>
              <div>
                <Button id="Popover1" onClick={this.toggle}>
                {this.state.mooviesCount}
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                <PopoverHeader>Derniers films ajoutés</PopoverHeader>
                <PopoverBody>{ this.state.moviesNameList }</PopoverBody>
                </Popover>
                </div>
            </div>
          </div>
          <div className="filmContainer col-12">
            <div className="row">
              {filmList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}



class Film extends Component {
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

export default App;
