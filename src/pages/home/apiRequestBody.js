const apiRequestBody = {
  Groups: [
    {
      GroupName: "Metadata",
      GroupProperties: "UniqueUrl",
    },
    {
      GroupName: "Images",
      GroupProperties: "Url|TypeId",
    },
    {
      GroupName: "SerieInfo",
      GroupProperties: "EpisodeName|SeasonName",
    },
    {
      GroupName: "Genre",
      GroupProperties: "Name",
    },
  ],
  Criteria: {
    SectionId: 3936,
    MediaType: 15,
  },
  Options: {
    UseApplePriceBRL: true,
    ImageTypeIds: [-1, 9001, 9002, 4001],
    RecordsPerPage: 30,
    SortCriteria: "None",
    OnlySVODItens: false,
    PageNumber: 0,
    SortOrder: "DESC",
  },
  AuthenticationTicket: process.env.REACT_APP_API_TICKET,
};

export default apiRequestBody;
