import axios from 'axios';
import { getImageData } from '../reducers/gallaryReducer';
import { setLoading } from '../../../common/reducers/commonReducer';
import { showAlert } from '../../../common/actions/commonActions';

export const fetchImagesByKeyword = (keyword: string) => async (dispath: any) => {
    dispath(setLoading(true));
  await axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fe2ab6b854d2b70d5e25dc215eb63448&format=json&nojsoncallback=1&text=' + keyword)
    .then((res: any) => {
        dispath(setLoading(false))
        if(res?.data?.stat === 'ok') {
            dispath(showAlert('success', 'Images successfully fetched.'));
            const data = res?.data?.photos?.photo?.map((item: any) => {
                let url = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;
                return {uri: url, title: item.title};
            })
            dispath(getImageData(data))
        }
        if(res?.data?.stat === 'fail') {
            dispath(showAlert('error', res?.data?.message));
        }
    }).catch((err: any) => {
        console.log('err', err)
        dispath(setLoading(false));
    })
}