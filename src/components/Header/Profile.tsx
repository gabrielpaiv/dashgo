import { Flex, Box, Text, Avatar } from '@chakra-ui/react'


export function Profile() {
  return (
    <Flex align="center">
      <Box>
        <Text>Gabriel Paiva</Text>
        <Text color="gray.300" fontSize="small">
          gabriel.alcantara.ti@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Gabriel Alcantara" src="https://github.com/gabrielpaiv.png" />
    </Flex>
  )
}