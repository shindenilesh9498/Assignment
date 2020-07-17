import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { fetchUsers } from '../Services/ApiService';
import { IconButton, Toolbar, Tooltip } from '@material-ui/core';
import { Edit, ViewHeadline } from '@material-ui/icons';
import { useHistory } from 'react-router';

const options = {
    filter: false,
    filterType: 'dropdown',
    responsive: "scroll",
    fixedHeader: "Enable",
    fixedHeaderOptions: {
        xAxis: true,
        yAxis: true
    },
    print: false,
    viewColumns: false,
    download: false,
    selectableRows: "none",
    rowHover: true,
    selectableRows: "none",
    setTableProps: () => {
        return {
            size: "small"
        };
    },
};


const sortArray = (arr) => {
    return arr.sort(function (a, b) {
        var nameA = a.title.toUpperCase();
        var nameB = b.title.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
}

export default function Dashboard() {
    const [data, setData] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetchUsersData();
    }, []);

    const fetchUsersData = () => {
        fetchUsers()
            .then((res) => {
                const sortedData = sortArray(res.data);
                setData(sortedData);
            })
            .catch((err) => console.log(err))
    }

    const columns = [
        {
            name: "title",
            label: "Title",
            options: {
                sort: true,
                sortDirection: "none"
            }
        },
        {
            name: "body",
            label: "Body",
            options: {
                sort: true,
            }
        },
        {
            name: "id",
            label: "Action",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <Tooltip title="more details">
                            <IconButton size="small" color="inherit" onClick={() => history.push({
                                pathname: '/details',
                                state: { id: value }
                            })}>
                                <ViewHeadline size={10} />
                            </IconButton>
                        </Tooltip >
                    );
                }
            }
        }
    ];

    return (<div>
        <MUIDataTable
            title={"Users Data"}
            data={data}
            columns={columns}
            options={options}
        />
    </div>)
}