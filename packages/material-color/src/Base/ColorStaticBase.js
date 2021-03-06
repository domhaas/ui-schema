import React from "react";
import {updateValue} from "@ui-schema/ui-schema";
import converters from "./transformers";
import merge from 'webpack-merge'

const ColorStaticBase = ({
                             storeKeys, schema, value, onChange, ColorPicker,
                             styles: customStyles = {},
                             pickerProps = {},
                         }) => {
    const styles = merge({}, customStyles);
    const format = schema.get('format');

    return <React.Fragment>
        <ColorPicker
            color={value || ''}
            disableAlpha={
                schema.getIn(['view', 'alpha']) !== true ||
                format === 'hex' ||
                format === 'rgb'
            }
            onChange={(color) => {
                onChange(updateValue(storeKeys,
                    format === 'hex' ?
                        converters.hex(color) :
                        format === 'rgb' ?
                            converters.rgb(color) :
                            format === 'rgb+a' ?
                                converters.rgba_rgb(color) :
                                format === 'rgba' ?
                                    converters.rgba(color) :
                                    converters.rgba_hex(color)
                ))
            }}
            styles={styles}
            {...pickerProps}
        />
    </React.Fragment>
};

export {ColorStaticBase};
