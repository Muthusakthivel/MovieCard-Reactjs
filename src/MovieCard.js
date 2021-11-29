import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';



class MovieCard extends Component{
	render(movie){


  var ratings = [this.props.movie.Ratings]

	return(
		<div >
		<div id="card">
		<h2 id="movieTitle">{this.props.movie.Title}</h2>	
			
			<Grid>
              <Row className="show-grid">
                <Col md={6} mdPush={6}>
                   <img src = {this.props.movie.Poster} alt="" />
                </Col>
                <Col md={6} mdPull={6}>
			      <div id="movieInfo">

                  <Table >
                  <tbody>
                    <tr >
                       <td className="item" id="top">Released</td>
                       <td className="info" id="top2">{this.props.movie.Released}</td>
                    </tr>
                    <tr>
                       <td className="item">Rated</td>
                       <td className="info">{this.props.movie.Rated}</td>
                    </tr>
                    <tr>
                       <td className="item">Genre</td>
                       <td className="info">{this.props.movie.Genre}</td>
                    </tr>
                    <tr>
                       <td className="item">Website</td>
                       <td className="info"><a href = {this.props.movie.Website}>{this.props.movie.Website}</a></td>
                    </tr>
                    <tr>
                       <td className="item">Awards</td>
                       <td className="info">{this.props.movie.Awards}</td>
                    </tr>
                    <tr>
                       <td className="item">Ratings</td>
                       <td className="info">
                       <Grid>
                       <Row  className="show-grid" id="ratings">
                         <Col md={8} mdPush={8}>
                           <p>{ratings[0][0].Source}</p> <p>{ratings[0][1].Source}</p> <p>{ratings[0][2].Source}</p>
                         </Col>
                         <Col md={4} mdPull={4}>
                           <p>{ratings[0][0].Value}</p> <p>{ratings[0][1].Value}</p> <p>{ratings[0][2].Value}</p>
                         </Col>       
                       </Row>
                       </Grid>
                       </td>
                    </tr>
                  </tbody>
                  </Table>

               </div>
		</Col>       
              </Row>
            </Grid>
		
		</div>
		</div>
		);
	}
}

export default MovieCard;