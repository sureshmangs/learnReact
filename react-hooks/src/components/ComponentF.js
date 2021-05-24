import React, { useContext } from 'react';

import { UserContext, ChannelContext } from '../App';

function ComponentF() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            ComponentF - Hi {user} from {channel}
        </div>
    )
}

export default ComponentF
