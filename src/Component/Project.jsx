import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton } from 'react-mdl';
class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-gird">
                    {/*Project1*/}

                    {/*Project1*/}
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg)center/cover' }}>React Project #1
                    </CardTitle>
                        <CardText>
                            Simple Todo List
                        </CardText>
                        <CardActions border>

                            <Button colored>
                                <a href="http://todolistphsycode.surge.sh/">Live</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>              </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg)center/cover' }}>React Project #2
                    </CardTitle>
                        <CardText>
                            Portfolio Using SPA
                        </CardText>
                        <CardActions border>

                            <Button colored>
                                <a href="http://todolistphsycode.surge.sh/">Live</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>              </Card >
                </div>

            )
        } else if (this.state.activeTab === 1) {
            return (

                <div className="projects-gird">
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '450px', background: 'url(http://phsycode.id/wp-content/uploads/2019/10/portofolio-logo-1-1.jpeg)center/cover' }}>Logo Design #1
            </CardTitle>
                        <CardText>
                            Logo Cofee Shop
                </CardText>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>              </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '450px', background: 'url(http://phsycode.id/wp-content/uploads/2019/10/portofolio-logo-2.jpeg)center/cover' }}>Logo Design #2
            </CardTitle>
                        <CardText>
                            Logo Cloth Distro
                </CardText>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>              </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '450px', background: 'url(http://phsycode.id/wp-content/uploads/2019/10/portofolio-logo-4-1.jpeg)center/cover' }}>Logo Design #3
            </CardTitle>
                        <CardText>
                            Logo Sound Band
                </CardText>

                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>              </Card ></div >
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-gird">  < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '450px', background: 'url(http://phsycode.id/wp-content/uploads/2019/10/2019-10-14-22-58-ppdb-smkarrahmah.epizy_.com_-1.png)center/cover' }}>PPDB SMK Arrahmah
        </CardTitle>
                    <CardText>
                        Website Pendaftaran Siswa Baru SMK
            </CardText>
                    <CardActions border>

                        <Button colored>
                            <a href="http://ppdb-smkarrahmah.epizy.com/">Live</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>              </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '450px', background: 'url(http://phsycode.id/wp-content/uploads/2019/10/smartmockups_jxueyolj.jpg)center/cover' }}>E-Rapor SMP Berbasis Web
        </CardTitle>
                        <CardText>
                            Website E-Rapor untuk mengelola nilai siswa
            </CardText>
                        <CardActions border>

                            <Button colored>
                                <a href="https://github.com/phsycodeid/eraporktsp">Github</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >

                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-gird">  < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '450px', background: 'url(http://trialsphsycode.rf.gd/img/portfolio/web1.png)center/cover' }}>Alijanoko
            </CardTitle>
                    <CardText>
                        Website Portal Berita dan Jurnal
                </CardText>
                    <CardActions border>

                        <Button colored>
                            <a href="http://alijanoko.com">Live</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>              </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '450px', background: 'url(http://phsycode.id/wp-content/uploads/2019/10/2019-10-14-22-41-cahayasurya.ac_.id_.png)center/cover' }}>Cahaya Surya
            </CardTitle>
                        <CardText>
                            Website Akedemis Institut Cahaya Surya
                </CardText>
                        <CardActions border>

                            <Button colored>
                                <a href="http://cahayasurya.ac.id">Live</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '450px', background: 'url(http://phsycode.id/wp-content/uploads/2019/10/2019-10-14-22-53-phsycode.id_.png)center/cover' }}>Phsycode.id
            </CardTitle>
                        <CardText>
                            Blog Pribadi saya tentang web Programming
                </CardText>
                        <CardActions border>

                            <Button colored>
                                <a href="http://phsycode.id">Live</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '450px', background: 'url(http://phsycode.id/wp-content/uploads/2019/10/2019-10-14-23-23-www.wealthersbrands.com_.png)center/cover' }}>wealthersbrands
            </CardTitle>
                        <CardText>
                            Toko Online Local Brand
                </CardText>
                        <CardActions border>

                            <Button colored>
                                <a href="http://wealthersbrands.com">Live</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                </div>
            )
        }
    }
    render() {
        return (
            <div className="categorytabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Logo Design</Tab>
                    <Tab>PHP</Tab>
                    <Tab>Wordpress</Tab>
                </Tabs>

                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>


        )
    }
}


export default Project;