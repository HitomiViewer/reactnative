import Svg, { G, Mask, Path, Rect, SvgProps } from "react-native-svg";

export default function SvgComponent(props: SvgProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Mask
        id="mask0_90_13"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <Rect width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_90_13)">
        <Path
          d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z"
          fill="#1C1B1F"
        />
      </G>
    </Svg>
  );
}
