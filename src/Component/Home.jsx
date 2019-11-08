import React from 'react';
import { Grid, Cell } from 'react-mdl';
class Home extends React.Component {
    render() {
        return (

            <div style={{ width: '100%', margin: '20px auto' }}>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                        <img src="https://avatars3.githubusercontent.com/u/52447313?s=460&v=4" alt="Douglas Jauhar" className="profile-img" />
                        <br />
                        <br />
                        <div className="banner-text"><br />
                            <h1>> ../ Im a Fullstack Web Developer</h1>
                            <hr />
                            <h2> Im Familliar With :</h2>
                            <h2>HTML&CSS | BOOTSTRAP | PHP | MYSQL | JavaScript | Node.Js | React.js</h2>
                            <div className="social-link">
                                {/* Linkedin */}
                                <a href="http://instagram.com/phsycode.id" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/phsycodeid" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Youtube */}
                                <a href="hhttps://www.youtube.com/channel/UCMI77Y4IBNy51GLKtg3DrFw" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                                {/* Browser */}
                                <a href="http://phsycode.id" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-globe" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}


export default Home;