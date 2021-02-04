import React from 'react';
import {
    List,
    StreamContainer,
    StreamThumbnail,
    StreamColumn,
    StreamRow,
    StreamHeader,
    StreamDescription,
    StreamCategory,
    StreamAvatar,
    StreamUsername,
    TagRow,
    TagView,
    TagText,
} from './styles';

import streamThumbail from '../../images/stream_thumbnail.jpg';


const StreamList: React.FC = ({ children }) => {

    const StreamItem: React.FC = () => (
        <StreamContainer>
            <StreamThumbnail source={streamThumbail} />
            <StreamColumn>
                <StreamRow>
                    <StreamHeader>
                        <StreamAvatar />
                        <StreamUsername numberOfLines={1}>rodz_oficail</StreamUsername>
                    </StreamHeader>
                    <StreamDescription numberOfLines={1}>
                        Font-end com Next.js, Chakra UI e GraphQL
                    </StreamDescription>
                    <StreamCategory numberOfLines={1}>
                        Science & Technology
                    </StreamCategory>
                </StreamRow>

                <TagRow>
                    <TagView>
                        <TagText>Portuguese</TagText>
                    </TagView>
                    <TagView>
                        <TagText>Web Development</TagText>
                    </TagView>
                </TagRow>
            </StreamColumn>
        </StreamContainer>
    );

    return (
        <List>
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
        </List>
    );
};

export default StreamList;
