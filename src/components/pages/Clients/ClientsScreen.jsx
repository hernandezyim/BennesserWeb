import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  IconButton,
} from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startmiddlewareClients } from "../../../actions/clients";
import { usePagination } from "../../../hooks/usePagination";

export const ClientsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startmiddlewareClients());
  }, [dispatch]);

  const { clients } = useSelector((state) => state.clients);

  const [
    elements,
    pageCount,
    currentPage,
    search,
    nextPage,
    prevPage,
    enterPage,
    onSearchChange,
  ] = usePagination(clients, 10);

  return (
    <>
      <Typography variant="h6">Clientes</Typography>

      <TextField
        type="text"
        value={search}
        onChange={onSearchChange}
        label="Buscar"
      ></TextField>

      <TableContainer style={{ width: "50%" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nombre completo</TableCell>
              <TableCell>Contacto</TableCell>
              <TableCell>Sector</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients &&
              elements?.map(({ id, nombreCompleto, contacto, sector }) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {nombreCompleto}
                  </TableCell>
                  <TableCell>{contacto}</TableCell>
                  <TableCell>{sector}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="outlined"
        onClick={prevPage}
        disabled={currentPage === 0}
      >
        Anterior
      </Button>
      {clients &&
        [...Array(pageCount).keys()].map((_, i) => (
          <Button
            variant={currentPage === i && "contained"}
            color="secondary"
            onClick={() => enterPage(i)}
          >
            {i + 1}
          </Button>
        ))}
      <Button
        variant="outlined"
        onClick={nextPage}
        disabled={currentPage + 1 >= pageCount}
      >
        Siguiente
      </Button>
    </>
  );
};
