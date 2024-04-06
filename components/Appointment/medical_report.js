import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { tokenContainer } from "../../actions/action-creators/config";
import { useEffect, useState } from "react";
import {fetchMedicalReportById} from '../../actions/action-creators/medical_report_action';

const MedicalReport = () => {
  const route = useRoute();
  const { appointment } = route.params;

  const [report , setReport] = useState(null);


  const viewReport = async () => {
    await fetchMedicalReportById(tokenContainer.token, appointment._id)
      .then((data) => {
        console.log(data.result);
        setReport(data.result);
      })
      .catch((e) => {
        // toast.error(e.message);
      });
  };

  useEffect(() => {
    viewReport();
  }, []);

  return (
    <View>
      <Text> MedicalReport </Text>
    </View>
  );
};

export default MedicalReport;
