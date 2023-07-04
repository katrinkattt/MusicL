import { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hook/useTypedSelector';
import { LanguageAction } from '../redux/settings/languageSlice';
import DropDownPicker from 'react-native-dropdown-picker';

export const DropDownLang = () => {
  const dispatch = useDispatch();
  const lng = useTypedSelector((state) => state.language);
  const [DropDownOpen, setDropDownOpen] = useState(false);
  const [DropDownValue, setDropDownValue] = useState(lng);
  return (
    <View
      style={{
        marginBottom: DropDownOpen ? 160 : 10,
      }}
    >
      <DropDownPicker
        disableBorderRadius={true}
        onSelectItem={async (item) => {
          dispatch(LanguageAction.setLanguage(item.value ? item.value : 'en'));
          // NativeModules.DevSettings.reload();
        }}
        closeAfterSelecting={true}
        theme={'DARK'}
        open={DropDownOpen}
        value={DropDownValue}
        items={[
          { label: 'English', value: 'en' },
          { label: 'Русский', value: 'ru' },
          { label: '中文', value: 'cn' },
          { label: 'Español', value: 'es' },
        ]}
        setOpen={setDropDownOpen}
        setValue={setDropDownValue}
      />
    </View>
  );
};
