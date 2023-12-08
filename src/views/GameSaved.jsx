import { AlphaType, Canvas, ColorType, Image, Skia, useImage } from "@shopify/react-native-skia";
import { StyleSheet, View } from "react-native";

export default function GameSaved(){

    const pixels = new Uint8Array(256 * 256 * 4);
    pixels.fill(255);
    let i = 0;
    for (let x = 0; x < 256; x++) {
        for (let y = 0; y < 256; y++) {
            pixels[(x + y * 256) * 4] = 255;
            pixels[(x + y * 256) * 4 + 1] = 0;
            pixels[(x + y * 256) * 4 + 2] = 255;
            pixels[(x + y * 256) * 4 + 3] = 255;
        }
    }
    const data = Skia.Data.fromBytes(pixels);
    const img = Skia.Image.MakeImage(
        {
            width: 256,
            height: 256,
            alphaType: AlphaType.Opaque,
            colorType: ColorType.RGBA_8888,
        },
        data,
        256 * 4
    );

    return (
        <>
            <Canvas style={{ width: 100, height: 400 }}>
               <Image image={img} fit="contain" x={0} y={0} />
            </Canvas>
        </>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         width: "100%",
//     }
// });