const usePagination = (currentPage, countries) => {

  const countryPerPage = 12;

  const indexOfLastCountry = currentPage * countryPerPage;

  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;

  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  const totalPages = Math.ceil(countries.length / countryPerPage);

  const listBottons = Array.from({length : totalPages}, (_, i) => i + 1);

  return {currentCountries, listBottons }

}

export default usePagination