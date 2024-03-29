import React, { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useOpenMeteoGetLocationCoordinates, useOpenWeatherGetLocationCoordinates } from '../../lib/react-query/queriesAndMutations';
import { useGeneralStore } from '../../store/generalStore';


const SearchBar = () => {

  const navigate = useNavigate()
  
  const [query, setQuery] = React.useState("")

  const selectedApi = useGeneralStore(state => state.selectedApi)
  const setLastSearchedQuery = useGeneralStore(state => state.setLastSearchedQuery)
  const setLatitude = useGeneralStore(state => state.setLatitude)
  const setLongitude = useGeneralStore(state => state.setLongitude)
  const appendHistory = useGeneralStore(state => state.appendHistory)
  
  const { 
    data, 
    isLoading: isLoadingOpenMeteo,
    refetch: fetchOpenMeteoLocationCoordinates,
  } = useOpenMeteoGetLocationCoordinates(query)

  const {
    data: dataOpenWeather,
    isLoading: isLoadingOpenWeather,
    refetch: fetchOpenWeatherLocationCoordinates,
  } = useOpenWeatherGetLocationCoordinates(query)
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (query === "") {
      toast.error('Please, type a city')
    } else {
      setLastSearchedQuery(query)
      if (selectedApi === "OPEN_METEO") {
        await fetchOpenMeteoLocationCoordinates()
      } else if (selectedApi === "OPEN_WEATHER") {
        await fetchOpenWeatherLocationCoordinates()
      }
    }
  }

  useEffect(() => {
    if (query) {

      if (selectedApi === "OPEN_METEO") {
        if (!data?.data.results) {
          toast.error('City not found')
        } else {
          const latitude = data?.data.results[0].latitude
          const longitude = data?.data.results[0].longitude

          setLatitude(latitude)
          setLongitude(longitude)

          appendHistory(query, latitude, longitude)
          setQuery('')
  
          navigate(`/search`)
        }

      } else if (selectedApi === "OPEN_WEATHER") {
        if (dataOpenWeather?.data.length === 0) {
          toast.error('City not found')
        } else {
          const latitude = dataOpenWeather?.data[0].lat
          const longitude = dataOpenWeather?.data[0].lon

          setLatitude(latitude)
          setLongitude(longitude)

          appendHistory(query, latitude, longitude)
          setQuery('')
  
          navigate(`/search`)
        }
      }
    }
  }, [data, dataOpenWeather])

  return (
    <>
      <form
        onSubmit={onSubmit}
        className='w-[60%] mt-10'
      >
        <div
          className='flex items-center justify-center rounded-pill bg-white-alpha-4'
        >
          <CiSearch 
            className='text-on-background text-[3rem] ml-4'
          />
          <input 
            type="text" 
            name='search' 
            placeholder='Search City ...' 
            autoComplete='off'
            className='w-full py-5 px-4 bg-transparent border-none focus:outline-none focus:ring-0'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            disabled={isLoadingOpenMeteo || isLoadingOpenWeather}
          />
        </div>
      </form>
    </>
  )
}

export default SearchBar