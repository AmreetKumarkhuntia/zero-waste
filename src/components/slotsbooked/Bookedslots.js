import * as React from 'react';
import { Table } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Paper } from '@material-ui/core';

import './css/bookedslots.css';

import { slots } from './slots';

const Bookedslots = () => {

    return (
        <>
            <div className='heading2'><h1>BOOKED SLOTS</h1></div>
            <TableContainer component={Paper}>
                <Table className='table' sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sl.no</TableCell>
                            <TableCell>PINCODES</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>State</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            slots.map((slots) => (
                                <TableRow>
                                    <TableCell>{slots.id}</TableCell>
                                    <TableCell>{slots.pin}</TableCell>
                                    <TableCell>{slots.location}</TableCell>
                                    <TableCell>{slots.city}</TableCell>
                                    <TableCell>{slots.state}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Bookedslots;