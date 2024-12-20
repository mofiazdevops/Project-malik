import { gql } from "@apollo/client";

export const GET_UPCOMING_POOLS = gql`
  query {
    pools(first: 4, where: { poolState: "APPROVED" }) {
      id
      address
      creator
      token
      meta
      totalMembers
      tokenTarget
      totalOwed
      weiRaised
      minWei
      maxWei
      poolType
      poolState
      ratio
    }
  }
`;

export const GET_FEATURED_POOLS = gql`
  query {
    pools(first: 12, where: { poolState: "CREATED" }) {
      id
      address
      creator
      token
      meta
      totalMembers
      tokenTarget
      totalOwed
      weiRaised
      minWei
      maxWei
      poolType
      poolState
      ratio
    }
  }
`;
