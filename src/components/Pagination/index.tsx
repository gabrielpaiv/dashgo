import { Stack, Button, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack direction="row" mt="8" justifyContent="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        <PaginationItem pageNumber={1} isCurrent />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
        <PaginationItem pageNumber={5} />
        <PaginationItem pageNumber={6} />
        <PaginationItem pageNumber={7} />
      </Stack>
    </Stack>
  )
}