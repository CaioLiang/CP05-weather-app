"use client"

import style from "./page.module.css"
import { Layout } from "@/components/Layout/Layout";
import { Header } from "@/components/Header/Header";
import { useSearchParams } from "next/navigation";
import UserContext from "../context/UserContext";
import { useVerifyLogin } from "@/helpers/useVerifyLogin";
import { useContext, useEffect, useState } from "react";

export default function Home() {

  const searchParams = useSearchParams();
  const cityCode = searchParams.get("cityCode")

  useVerifyLogin();

  const { userName } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cityData, setCityData] = useState();
  const [forecast, setForecast] = useState([]);

  const dateFormat = (data: string) => {
    return new Date(data).toLocaleDateString('pt-br', { timeZone: 'UTC' });
  }

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
      <Header title="Inicio" userName={userName}/>
      <main className={style.styled_main}>
        <div>
          {isLoading
            ? (<p>Carregando</p>
            ) : (
              <div>
                <h2 className={style.styled_h2}>
                  {cityData?.cidade}/{cityData?.estado}
                </h2>
                <p>
                  Min <span>{cityData?.clima[0].min}</span> /
                  Max <span>{cityData?.clima[0].max}</span>
                </p>
                <p>{cityData?.clima[0].condicao_desc}</p>
              </div>
            )}
        </div>
        <div>
          {forecast.map((item) => (
            <div key={item.data}>
              <span>{dateFormat(item.data)}</span>
              <span>{item.condicao}</span>
              <span>Min: {item.min}&#176;</span>
              <span>Max: {item.max}&#176;</span>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
