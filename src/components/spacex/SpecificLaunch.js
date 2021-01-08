import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardTitle, Container } from "reactstrap";

export default function SpecificLaunch() {
  let { id } = useParams();
  const [specificLaunchData, setSpecificLaunchData] = useState([]);

  // NEEDS TO RUN AFTER BUTTON IS CLICKED FOR SPECIFIC LAUNCH
  useEffect(() => {
    Axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((res) => {
        console.log(res.data);
        setSpecificLaunchData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <Container
        style={{
          marginTop: "4rem",
        }}
      >
        <Card
          style={{
            backgroundColor: "#726D7A",
          }}
        >
          <h3 style={{ color: "#FFF" }}>Name: {specificLaunchData.name}</h3>
          <h3 style={{ color: "#FFF" }}>
            Date: {specificLaunchData.date_local}
          </h3>
          <h3 style={{ color: "#FFF" }}>
            Details: {specificLaunchData.details}
          </h3>
          <h3 style={{ color: "#FFF" }}>{specificLaunchData.id}</h3>
        </Card>
      </Container>
    </div>
  );
}
