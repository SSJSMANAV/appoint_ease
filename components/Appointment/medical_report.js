import { View, Text, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { tokenContainer } from "../../actions/action-creators/config";
import { useEffect, useState } from "react";
import { fetchMedicalReportById } from "../../actions/action-creators/medical_report_action";

const MedicalReport = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState(null); // Initialize report state

  const route = useRoute();
  const { appointment } = route.params;

  const viewReport = async () => {
    setIsLoading(true);
    try {
      const data = await fetchMedicalReportById(
        tokenContainer.token,
        appointment._id
      );
      console.log(data.result);
      setReport(data.result);
      console.log("jahaj");
    } catch (error) {
      // Handle error
      console.error(error);
      // toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    viewReport();
  }, []);

  return (
    <View className="w-10/12 mx-auto my-10 px-4 py-4 rounded-lg bg-slate-400 ">
      {/* Check if report exists before accessing its properties */}
      <Text>
        {report && (
          <View className="w-full">
            <View className="py-2 border-b-2 border-white w-full">
              <Text
                className="text-lg font-semibold "
                style={{ fontFamily: "Poppins-Semibold" }}
              >
                Date: {report.date.split("T")[0]}
              </Text>
            </View>
            <View className="py-2 border-b-2 border-white">
              <Text
                className="text-lg font-semibold"
                style={{ fontFamily: "Poppins-Regular" }}
              >
                Diagnosis: {report.diagnosis}
              </Text>
            </View>
            <View className="py-2 " style={{ maxWidth: 320, minWidth: 100 }}>
              <Text
                className=""
                style={{ fontFamily: "Poppins-Regular", fontSize: 16 }}
              >
                Description: {report.description}
              </Text>
            </View>

            <View className="flex-col py-2 border-b-2 border-white">
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16 }}>
                Recommendations:
              </Text>
              <View>
                {report.recommends.map((recommendations, index) => (
                  <View key={index} style={{ flexDirection: "row" }}>
                    <Text
                      style={{ fontFamily: "Poppins-Regular", fontSize: 14 }}
                    >
                      {index + 1}
                      {".  "}
                    </Text>
                    <Text
                      style={{ fontFamily: "Poppins-Regular", fontSize: 14 }}
                    >
                      {recommendations}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View className="flex-col py-2 border-b-2 border-white">
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16 }}>
                Non-Recommendations:
              </Text>
              <View>
                <View>
                  {report.nonrecommendeds.map((nonRecommendation, index) => (
                    <View key={index} style={{ flexDirection: "row" }}>
                      <Text
                        style={{ fontFamily: "Poppins-Regular", fontSize: 14 }}
                      >
                        {index + 1}
                        {".  "}
                      </Text>
                      <Text
                        style={{ fontFamily: "Poppins-Regular", fontSize: 14 }}
                      >
                        {nonRecommendation}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
            <View className="pt-4">
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: 15 }}>
                Patient Name: {report.patientName}
              </Text>
            </View>
          </View>
        )}
      </Text>
    </View>
  );
};

export default MedicalReport;
