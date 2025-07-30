import PagerView from 'react-native-pager-view';
import GetStarted1 from './get-started-1';
import GetStarted2 from './get-started-2';
import GetStarted3 from './get-started-3';
export default function GetStartedPager() {
  return (
    <PagerView style={{ flex: 1 }} initialPage={0}>
      <GetStarted1 key="1" />
      <GetStarted2 key="2" />
      <GetStarted3 key="3" />
    </PagerView>
  );
}