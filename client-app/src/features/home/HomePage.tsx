import { Link } from "react-router-dom";
import { Container, Header, Image, Segment, Button } from "semantic-ui-react";

export default function HomePage() {
    return (
       <Segment inverted textAlign="center" vertical className="masthead">
            <Container text>
                <Header as="h1" inverted>
                    <Image size="massive" src="/assets/Cat1.jpeg" alt="logo" style={{marginBottom: 12}} />
                    Goings On
                </Header>
                <Header as="h2" inverted content="Welcome to Goings On" />
                <Button as={Link} to="/activities" size="huge" inverted>
                    Take me to the goings on
                </Button>
            </Container>
       </Segment>
    )
}