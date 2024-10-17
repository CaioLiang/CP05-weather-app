"use client"

import style from "./page.module.css"
import { Layout}  from "@/components/Layout/Layout";
import { Header } from "@/components/Header/Header";
import { useSearchParams } from "next/navigation";
import UserContext from "../context/UserContext";
import { useVerifyLogin } from "@/helpers/useVerifyLogin";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  
  const searchParams = useSearchParams();
  const cityCode = searchParams.get("cityCode")

  const loadForecast = async (cityCode: number) => {
    const params = {
      code: cityCode,
      days: 6
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${params.code}/${params.days}`
      );

      const data = await response.json();
      setForecast(data.clima);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  useVerifyLogin();
  
  const { userName } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cityData, setCityData] = useState();
  const [forecast, setForecast] = useState([]);

  const dateFormat = (data: string) => {
    return new Date(data).toLocaleDateString('pt-br', { timeZone: 'UTC' });
  }

  const loadCity = async (cityCode: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}`);
      const data = await response.json();
      setCityData(data);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const cityCodeParams = cityCode ? Number(cityCode) : 244;

    if (cityCode) {
      loadCity(cityCodeParams);
      loadForecast(cityCodeParams);
    } else {
      loadCity(244);
      loadForecast(244);
    }
  }, []);

  return (
    <Layout>
      <Header title="Home" userName={userName}/>
      <main className = {style.styled_main}>
        <h1>Inicio</h1>
      </main>
    </Layout>
  )
}
