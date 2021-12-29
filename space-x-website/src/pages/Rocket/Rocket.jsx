import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
// components
import Error from './../../components/Error/Error';
import Loader from './../../components/Loader/Loader';
import Rocket from './../../components/Rocket/Rocket';

const GET_ROCKET_INFO = gql`
    query GET_ROCKET_INFO($rocketId: ID!) {
        rocket(id: $rocketId) {
            name
            height {
                feet
                meters
            }
            diameter {
                feet
                meters
            }
            stages
            cost_per_launch
            engines {
                type
                number
                propellant_1
                propellant_2
                thrust_to_weight
            }
        }
    }
`;

const RocketPage = () => {
    const { rocketId } = useParams();

    const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
        variables: { rocketId },
    });

    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    return <Rocket rocket={{ ...data.rocket, rocketId: rocketId }} />;
};

export default RocketPage;
