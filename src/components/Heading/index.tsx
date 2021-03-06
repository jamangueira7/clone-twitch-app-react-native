import React from 'react';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import { Container, HeadingText } from './styles';

const Heading: React.FC = ({ children }) => {
    return (
        <Container>
            <HeadingText>{children}</HeadingText>
        </Container>
    );
};

export default Heading;
