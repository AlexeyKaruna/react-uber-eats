import MainSearchInput from "./MainSearchInput";
import MobileLocationInput from "./MobileLocationInput";
import { MobileButton } from "../common/Button";
import { MobileSearchText } from "../common/Text";

function Search(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-12 col-lg-12">
          <MainSearchInput placeholder="Search for reastaurant or cuisine" />
        </div>
        <div className="col-xs-2">
          <MobileSearchText variant="gray" size={11}>
            When
          </MobileSearchText>
        </div>
        <div className="col-xs-9 col-xs-offset-1">
          <MobileSearchText variant="gray" size={11}>
            To
          </MobileSearchText>
        </div>
        <div className="col-xs-3">
          <MobileButton primary>ASAP</MobileButton>
        </div>
        <div className="col-xs-9">
          <MobileLocationInput placeholder="Find some place here..." />
        </div>
      </div>
    </div>
  );
}
export default Search;
