import { useRef, useState } from "react";
import { Image as NativeImage, ImageProps } from "expo-image";
import styled from "styled-components/native";

const Wrapper = styled.View``;

const LoadingWrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: 60px;
`;

const Loading = styled.ActivityIndicator``;

export default function Image(props: ImageProps) {
  const ref = useRef<NativeImage>(null);
  const [retry, setRetry] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Wrapper>
      {loading ? (
        <LoadingWrapper
          style={{
            display: "flex",
          }}
        >
          <Loading size="small" color="#000000" />
        </LoadingWrapper>
      ) : null}
      <NativeImage
        ref={ref}
        // key={`image-${props.source.toString()}-${retry}`}
        {...props}
        style={{
          ...((props.style as any) ?? {}),
          display: loading ? "none" : "flex",
        }}
        onLoadEnd={() => (setLoading(false), props.onLoadEnd?.())}
        onError={(error) => (
          setRetry(retry + 1), setLoading(true), props.onError?.(error)
        )}
      />
    </Wrapper>
  );
}
