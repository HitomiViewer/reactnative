import Svg, { G, Mask, Path, Rect, SvgProps } from "react-native-svg";

export default function SvgComponent(props: SvgProps) {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Mask
        id="mask0_90_19"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="25"
      >
        <Rect x="0.849609" y="0.859573" width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_90_19)">
        <Path
          d="M12.8496 23.8596L9.84961 20.8596H5.84961C5.29961 20.8596 4.82878 20.6637 4.43711 20.2721C4.04544 19.8804 3.84961 19.4096 3.84961 18.8596V4.85957C3.84961 4.30957 4.04544 3.83874 4.43711 3.44707C4.82878 3.05541 5.29961 2.85957 5.84961 2.85957H19.8496C20.3996 2.85957 20.8704 3.05541 21.2621 3.44707C21.6538 3.83874 21.8496 4.30957 21.8496 4.85957V18.8596C21.8496 19.4096 21.6538 19.8804 21.2621 20.2721C20.8704 20.6637 20.3996 20.8596 19.8496 20.8596H15.8496L12.8496 23.8596ZM5.84961 18.8596H10.6496L12.8496 21.0596L15.0496 18.8596H19.8496V4.85957H5.84961V18.8596ZM14.3996 13.4096L17.8496 11.8596L14.3996 10.3096L12.8496 6.85957L11.2996 10.3096L7.84961 11.8596L11.2996 13.4096L12.8496 16.8596L14.3996 13.4096Z"
          fill="#1C1B1F"
        />
      </G>
    </Svg>
  );
}