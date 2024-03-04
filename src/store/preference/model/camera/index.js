export default {
  label: 'preferences.camera.name',
  field: 'scrcpy',
  children: {
    // camera: {
    //   label: 'preferences.camera.enable.name',
    //   field: '--camera',
    //   type: 'CameraSwitch',
    //   value: undefined,
    //   placeholder: 'preferences.camera.enable.placeholder',
    //   tips: 'preferences.camera.enable.tips',
    //   hidden: true,
    // },
    cameraFacing: {
      label: 'preferences.camera.camera-facing.name',
      field: '--camera-facing',
      type: 'Select',
      value: undefined,
      placeholder: 'preferences.camera.camera-facing.placeholder',
      options: [
        { label: 'preferences.camera.camera-facing.front', value: 'front' },
        { label: 'preferences.camera.camera-facing.back', value: 'back' },
        {
          label: 'preferences.camera.camera-facing.external',
          value: 'external',
        },
      ],
    },
    cameraSize: {
      label: 'preferences.camera.camera-size.name',
      field: '--camera-size',
      type: 'Input',
      value: undefined,
      placeholder: 'preferences.camera.camera-size.placeholder',
    },
    cameraAr: {
      label: 'preferences.camera.camera-ar.name',
      field: '--camera-ar',
      type: 'Input',
      value: undefined,
      placeholder: 'preferences.camera.camera-ar.placeholder',
    },
    cameraFps: {
      label: 'preferences.camera.camera-fps.name',
      field: '--camera-fps',
      type: 'Input.number',
      value: undefined,
      placeholder: 'preferences.camera.camera-fps.placeholder',
      append: 'fps',
    },
  },
}
