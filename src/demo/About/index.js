import React from 'react';

import './index.scss';

import { Container, Header, Grid, List, Button, Card, Image, Icon } from 'semantic-ui-react';





class About extends React.Component {
 
    render() {
        return (
            <div className="about-wrapper">

               <div className="banner-wrapper">
               <img src="https://www.bannerbatterien.com/upload/filecache/Banner-Batterien-Windrder2-web_bd5cb0f721881d106522f6b9cc8f5be6.jpg"></img>
               </div>

               <div className="content-wrapper">
                    <Grid columns='equal'>
                    <Grid.Column width={9}>
                    <Container fluid>
                    <Header as='h2'>About US</Header>
                    <p>
                        Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
                        ancestors, which would have been pack hunters with complex body language. These
                        sophisticated forms of social cognition and communication may account for their
                        trainability, playfulness, and ability to fit into human households and social situations,
                        and these attributes have given dogs a relationship with humans that has enabled them to
                        become one of the most successful species on the planet today.
                    </p>
                    <p>
                        The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous
                        across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling
                        loads, protection, assisting police and military, companionship, and, more recently, aiding
                        handicapped individuals. This impact on human society has given them the nickname "man's
                        best friend" in the Western world. In some cultures, however, dogs are also a source of
                        meat.
                    </p>
                    </Container>
                    </Grid.Column>
                    <Grid.Column className="pad-left-40">

                    <Header as='h2'>Latest NEWS</Header>
                    <List divided relaxed>
                        <List.Item>
                        <List.Icon name='github' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='github' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                            <List.Description as='a'>Updated 22 mins ago</List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='github' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                            <List.Description as='a'>Updated 34 mins ago</List.Description>
                        </List.Content>
                        </List.Item>
                    </List>
                        
                    </Grid.Column>
                </Grid>
               
               </div>

               <div className="video-wrapper">
                <Grid columns='equal' className="white-background">
                        <Grid.Column width={8}>
                        <video id="video" src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls></video>    
                        </Grid.Column>
                        <Grid.Column >
                        <h2>Lorem Ipsum Dollar</h2>

                        <p>
                            The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous
                            across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling
                            loads, protection, assisting police and military, companionship, and, more recently, aiding
                            handicapped individuals. This impact on human society has given them the nickname "man's
                            best friend" in the Western world. In some cultures, however, dogs are also a source of
                            meat. 
                        </p>
                        <Button primary>Click ME</Button>
                        </Grid.Column>
                        </Grid>
               </div>

               <div className="cards-wrapper">
               <div  className="white-background">
               <Header as='h2' textAlign="center">Profiles</Header>
               
               <Grid columns='equal'className="no-mar">
              
                <Grid.Column width={4}>
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                         more
                    </a>
                    </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column width={4}>
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                         more
                    </a>
                    </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column width={4}>
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                         more
                    </a>
                    </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column width={4}>
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                         more
                    </a>
                    </Card.Content>
                </Card>
                </Grid.Column>
                </Grid>
                </div>
               </div>
                
           </div>
        );
    }
}

export default About;
