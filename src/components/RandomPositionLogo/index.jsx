import { Image } from "@chakra-ui/react";

export function RandomPositionLogo({ icon, ...rest }) {
  return (
    <Image src={icon} maxW="3rem" position="absolute" {...rest} />
  )
}