import { AlphaType, Blur, Canvas, ColorType, Image, Skia } from "@shopify/react-native-skia";
import { parseColor } from "../utils/color";

function generateDataBuffer(width, height, colors, data, scale = 1){
    const image_width = width * scale;
    const image_height = height * scale;
    const arr = new Uint8Array(image_width * image_height * 4);
    const palette = colors.map(e => parseColor(e));
    for (let y = 0; y < image_width; y++) {
        for (let x = 0; x < image_height; x++) {
            const nonogram_pixel = data[Math.floor(y / scale)][Math.floor(x / scale)];
            
            arr[(x + image_width * y) * 4 + 0] = palette[nonogram_pixel][0];
            arr[(x + image_width * y) * 4 + 1] = palette[nonogram_pixel][1];
            arr[(x + image_width * y) * 4 + 2] = palette[nonogram_pixel][2];
            arr[(x + image_width * y) * 4 + 3] = palette[nonogram_pixel][3] * 255;
        }
    }

    return arr;
}

export default function NonogramPreview({nonogram, width: props_width, height: props_height, blurry, blurLevel}){
    const width = props_width ?? 100, height = props_height ?? 100;
    const img_data = Skia.Data.fromBytes(generateDataBuffer(nonogram.width, nonogram.height, nonogram.colors, nonogram.data));
    const img = Skia.Image.MakeImage(
        {
            width: nonogram.width,
            height: nonogram.height,
            alphaType: AlphaType.Opaque,
            colorType: ColorType.RGBA_8888,
        },
        img_data,
        nonogram.width * 4
    );

    return (
        <Canvas style={{ width, height }}>
            <Image image={img} fit="contain" width={width} height={height}>
                {blurry && <Blur blur={blurLevel ?? 5}/>}
            </Image>
        </Canvas>
    );
}