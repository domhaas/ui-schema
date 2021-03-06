import useTheme from "@material-ui/core/styles/useTheme";
import {ColorBase} from "./Base/ColorBase";
import React from "react";
import {styleWrapper} from "./styleWrapper";
import {AlphaPicker} from 'react-color';

const WrappedAlphaPicker = p => {
    const theme = useTheme();
    return <div style={styleWrapper(theme)}>
        <div style={{background: '#ffffff', borderRadius: 3}}>
            <AlphaPicker {...p} width={'100%'}/>
        </div>
    </div>
};

const ColorAlpha = (props) => {
    return <ColorBase {...props} ColorPicker={WrappedAlphaPicker}/>
};

export {ColorAlpha}
