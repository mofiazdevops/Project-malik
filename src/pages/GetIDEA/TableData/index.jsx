import BridgedToken from 'components/BridgedToken';
import React from 'react';
import styled from "@emotion/styled";

const Table = styled.table`
    width:100%;
    th{
        border-bottom: 1px solid #e0d8d8;
        border-right: 1px solid #e0d8d8;
        padding: 2rem;
    }
    th:last-child{
        border-right: none;
    }
`;

const TD = styled.td`
    color: #3b465c;
    font-size: 14px;
    text-align:center;  
    padding:21px 32px 20px;
    border-right: 1px solid #e0d8d8;
    font-weight:${props => props.solid ? 500 : 0};
    &:last-child{
        border-right: none;
    }
`;


export default function TableData() {
    return (
        <Table>
            <tr>
                <th>Test Balances</th>
                <th>Mainnet</th>
                <th>Child</th>
            </tr>
            <tr>
                <TD solid={true}><BridgedToken token='IDEA' /></TD>
                <TD blur={true}>12745504...	</TD>
                <TD blur={true}>886002.0...</TD>
            </tr>
            <tr>
                <TD solid={true}>
                    <BridgedToken token='TRD20' bridge={'PLASMA'} />
                </TD>
                <TD blur={true}>12745504...	</TD>
                <TD blur={true}>886002.0...</TD>
            </tr>
            <tr>
                <TD solid={true}>
                    <BridgedToken token='TRD21' bridge={'PLASMA'} />
                </TD>
                <TD blur={true}>12745504...	</TD>
                <TD blur={true}>886002.0...</TD>
            </tr>
            <tr>
                <TD solid={true}>
                    <BridgedToken token='TRD21' bridge={'PLASMA'} />

                </TD>
                <TD blur={true}>12745504...	</TD>
                <TD blur={true}>886002.0...</TD>
            </tr>
            <tr>
                <TD solid={true}>
                    <BridgedToken token='TRD21' bridge={'PoS'} alert={true} />
                </TD>
                <TD blur={true}>12745504...	</TD>
                <TD blur={true}>886002.0...</TD>
            </tr>
            <tr>
                <TD solid={true}>
                    <BridgedToken token='ERTRD55' bridge={'PoS'} alert={true} />
                </TD>
                <TD blur={true}>12745504...	</TD>
                <TD blur={true}>886002.0...</TD>
            </tr>
            <tr>
                <TD solid={true}>
                    <BridgedToken token='LINK' />
                </TD>
                <TD blur={true}>12745504...	</TD>
                <TD blur={true}>-</TD>
            </tr>



        </Table>
    );
}
