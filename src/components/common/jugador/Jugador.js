import React, { Component } from 'react';

// Material
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

// Estilos
import './Jugador.css';

class Jugador extends Component {
    state = {
        fotoSrc: ""
    }

    componentDidMount() {

    var self = this,
    img = this.props.foto;

    img.onerror = function () {
        self.setState({ fotoSrc: 'http://i.imgur.com/lL3LtFD.jpg' });
    };

    img.src = this.state.src;

    }

    render() {
        return (
            <div>
                <Card className="card">
                    <CardMedia
                        className="media"
                        image={this.state.fotosrc}
                        title="Felinos"
                    />
                    <CardContent>
                        <Typography variant="subheading" component="h2" align="center" color="primary">
                            {this.props.nombre}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Jugador;
