import fetch from 'node-fetch'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { FaStar } from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function latest(props) {
    return (
        <div className="tabs">
            {props.data.results.map(item => (
                <Card style={{
                    width: '150px',
                    height: 'auto', whiteSpace: 'pre-wrap',
                    display: 'inline-block', verticalAlign: 'top', border: 'none',
                    marginRight: '10px', overflow: 'hidden'
                }}>
                    {
                        item.poster_path = "http://image.tmdb.org/t/p/w185" + item.poster_path,
                        <Card.Img rounded variant="top" src={item.poster_path} style={{ objectFit: 'fill' }} />
                    }


                    <Card.Body>
                        <Card.Subtitle>
                           <FaStar /> <Badge variant="primary" style={{verticalAlign:'baseline, '}}>{item.vote_average}</Badge>
                        </Card.Subtitle>
                        <Card.Link href="#">
                            <Card.Subtitle className="mb-2 text-muted" style={{marginTop:'3px'}}>{item.title}</Card.Subtitle>
                        </Card.Link>
                    </Card.Body>


                </Card>
            ))}


            <style jsx>{`
                .tabs{
                    overflow: auto;
                    white-space: nowrap;
                    padding-bottom: 15px;
                    scrollbar-width: thin;
                    margin-top:5px;
                }
            `}
            </style>
            <style global jsx>{`
                body {
                 margin: 0px; padding: 0px
                }
            `}
            </style>
        </div>
    )
}

export default latest;
