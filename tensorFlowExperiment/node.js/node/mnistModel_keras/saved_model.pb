ÿ­
î¾
B
AssignVariableOp
resource
value"dtype"
dtypetype
~
BiasAdd

value"T	
bias"T
output"T" 
Ttype:
2	"-
data_formatstringNHWC:
NHWCNCHW
8
Const
output"dtype"
valuetensor"
dtypetype
.
Identity

input"T
output"T"	
Ttype
q
MatMul
a"T
b"T
product"T"
transpose_abool( "
transpose_bbool( "
Ttype:

2	
e
MergeV2Checkpoints
checkpoint_prefixes
destination_prefix"
delete_old_dirsbool(

NoOp
M
Pack
values"T*N
output"T"
Nint(0"	
Ttype"
axisint 
C
Placeholder
output"dtype"
dtypetype"
shapeshape:
@
ReadVariableOp
resource
value"dtype"
dtypetype
E
Relu
features"T
activations"T"
Ttype:
2	
o
	RestoreV2

prefix
tensor_names
shape_and_slices
tensors2dtypes"
dtypes
list(type)(0
l
SaveV2

prefix
tensor_names
shape_and_slices
tensors2dtypes"
dtypes
list(type)(0
?
Select
	condition

t"T
e"T
output"T"	
Ttype
H
ShardedFilename
basename	
shard

num_shards
filename
9
Softmax
logits"T
softmax"T"
Ttype:
2
¾
StatefulPartitionedCall
args2Tin
output2Tout"
Tin
list(type)("
Tout
list(type)("	
ffunc"
configstring "
config_protostring "
executor_typestring 
@
StaticRegexFullMatch	
input

output
"
patternstring
N

StringJoin
inputs*N

output"
Nint(0"
	separatorstring 

VarHandleOp
resource"
	containerstring "
shared_namestring "
dtypetype"
shapeshape"#
allowed_deviceslist(string)
 "serve*2.5.02v2.5.0-rc3-213-ga4dfb8d1a718¸

dense_Dense1/kernelVarHandleOp*
_output_shapes
: *
dtype0*
shape:
*$
shared_namedense_Dense1/kernel
}
'dense_Dense1/kernel/Read/ReadVariableOpReadVariableOpdense_Dense1/kernel* 
_output_shapes
:
*
dtype0
{
dense_Dense1/biasVarHandleOp*
_output_shapes
: *
dtype0*
shape:*"
shared_namedense_Dense1/bias
t
%dense_Dense1/bias/Read/ReadVariableOpReadVariableOpdense_Dense1/bias*
_output_shapes	
:*
dtype0

dense_Dense2/kernelVarHandleOp*
_output_shapes
: *
dtype0*
shape:	
*$
shared_namedense_Dense2/kernel
|
'dense_Dense2/kernel/Read/ReadVariableOpReadVariableOpdense_Dense2/kernel*
_output_shapes
:	
*
dtype0
z
dense_Dense2/biasVarHandleOp*
_output_shapes
: *
dtype0*
shape:
*"
shared_namedense_Dense2/bias
s
%dense_Dense2/bias/Read/ReadVariableOpReadVariableOpdense_Dense2/bias*
_output_shapes
:
*
dtype0

NoOpNoOp

ConstConst"/device:CPU:0*
_output_shapes
: *
dtype0*×
valueÍBÊ BÃ
°
layer_with_weights-0
layer-0
layer_with_weights-1
layer-1
regularization_losses
trainable_variables
	variables
	keras_api

signatures
h

kernel
	bias

regularization_losses
trainable_variables
	variables
	keras_api
h

kernel
bias
regularization_losses
trainable_variables
	variables
	keras_api
 

0
	1
2
3

0
	1
2
3
­
regularization_losses
trainable_variables
metrics
non_trainable_variables

layers
layer_regularization_losses
	variables
layer_metrics
 
_]
VARIABLE_VALUEdense_Dense1/kernel6layer_with_weights-0/kernel/.ATTRIBUTES/VARIABLE_VALUE
[Y
VARIABLE_VALUEdense_Dense1/bias4layer_with_weights-0/bias/.ATTRIBUTES/VARIABLE_VALUE
 

0
	1

0
	1
­

regularization_losses
trainable_variables
metrics
non_trainable_variables

layers
layer_regularization_losses
	variables
layer_metrics
_]
VARIABLE_VALUEdense_Dense2/kernel6layer_with_weights-1/kernel/.ATTRIBUTES/VARIABLE_VALUE
[Y
VARIABLE_VALUEdense_Dense2/bias4layer_with_weights-1/bias/.ATTRIBUTES/VARIABLE_VALUE
 

0
1

0
1
­
regularization_losses
trainable_variables
metrics
non_trainable_variables

 layers
!layer_regularization_losses
	variables
"layer_metrics
 
 

0
1
 
 
 
 
 
 
 
 
 
 
 
 

"serving_default_dense_Dense1_inputPlaceholder*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ*
dtype0*
shape:ÿÿÿÿÿÿÿÿÿ

StatefulPartitionedCallStatefulPartitionedCall"serving_default_dense_Dense1_inputdense_Dense1/kerneldense_Dense1/biasdense_Dense2/kerneldense_Dense2/bias*
Tin	
2*
Tout
2*
_collective_manager_ids
 *'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
*&
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 **
f%R#
!__inference_signature_wrapper_197
O
saver_filenamePlaceholder*
_output_shapes
: *
dtype0*
shape: 
¼
StatefulPartitionedCall_1StatefulPartitionedCallsaver_filename'dense_Dense1/kernel/Read/ReadVariableOp%dense_Dense1/bias/Read/ReadVariableOp'dense_Dense2/kernel/Read/ReadVariableOp%dense_Dense2/bias/Read/ReadVariableOpConst*
Tin

2*
Tout
2*
_collective_manager_ids
 *
_output_shapes
: * 
_read_only_resource_inputs
 *-
config_proto

CPU

GPU 2J 8 *%
f R
__inference__traced_save_322
ç
StatefulPartitionedCall_2StatefulPartitionedCallsaver_filenamedense_Dense1/kerneldense_Dense1/biasdense_Dense2/kerneldense_Dense2/bias*
Tin	
2*
Tout
2*
_collective_manager_ids
 *
_output_shapes
: * 
_read_only_resource_inputs
 *-
config_proto

CPU

GPU 2J 8 *(
f#R!
__inference__traced_restore_344ß
Ø

E__inference_sequential_1_layer_call_and_return_conditional_losses_186
dense_dense1_input4
 dense_dense1_dense_dense1_kernel:
-
dense_dense1_dense_dense1_bias:	3
 dense_dense2_dense_dense2_kernel:	
,
dense_dense2_dense_dense2_bias:

identity¢$dense_Dense1/StatefulPartitionedCall¢$dense_Dense2/StatefulPartitionedCallÉ
$dense_Dense1/StatefulPartitionedCallStatefulPartitionedCalldense_dense1_input dense_dense1_dense_dense1_kerneldense_dense1_dense_dense1_bias*
Tin
2*
Tout
2*
_collective_manager_ids
 *(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ*$
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *M
fHRF
D__inference_dense_Dense1_layer_call_and_return_conditional_losses_862&
$dense_Dense1/StatefulPartitionedCallä
$dense_Dense2/StatefulPartitionedCallStatefulPartitionedCall-dense_Dense1/StatefulPartitionedCall:output:0 dense_dense2_dense_dense2_kerneldense_dense2_dense_dense2_bias*
Tin
2*
Tout
2*
_collective_manager_ids
 *'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
*$
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *N
fIRG
E__inference_dense_Dense2_layer_call_and_return_conditional_losses_1012&
$dense_Dense2/StatefulPartitionedCallÏ
IdentityIdentity-dense_Dense2/StatefulPartitionedCall:output:0%^dense_Dense1/StatefulPartitionedCall%^dense_Dense2/StatefulPartitionedCall*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 2L
$dense_Dense1/StatefulPartitionedCall$dense_Dense1/StatefulPartitionedCall2L
$dense_Dense2/StatefulPartitionedCall$dense_Dense2/StatefulPartitionedCall:\ X
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
,
_user_specified_namedense_Dense1_input

¬
*__inference_dense_Dense2_layer_call_fn_287

inputs&
dense_dense2_kernel:	

dense_dense2_bias:

identity¢StatefulPartitionedCall
StatefulPartitionedCallStatefulPartitionedCallinputsdense_dense2_kerneldense_dense2_bias*
Tin
2*
Tout
2*
_collective_manager_ids
 *'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
*$
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *N
fIRG
E__inference_dense_Dense2_layer_call_and_return_conditional_losses_1012
StatefulPartitionedCall
IdentityIdentity StatefulPartitionedCall:output:0^StatefulPartitionedCall*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*+
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : 22
StatefulPartitionedCallStatefulPartitionedCall:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs
·


E__inference_dense_Dense2_layer_call_and_return_conditional_losses_280

inputs<
)matmul_readvariableop_dense_dense2_kernel:	
6
(biasadd_readvariableop_dense_dense2_bias:

identity¢BiasAdd/ReadVariableOp¢MatMul/ReadVariableOp
MatMul/ReadVariableOpReadVariableOp)matmul_readvariableop_dense_dense2_kernel*
_output_shapes
:	
*
dtype02
MatMul/ReadVariableOps
MatMulMatMulinputsMatMul/ReadVariableOp:value:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2
MatMul
BiasAdd/ReadVariableOpReadVariableOp(biasadd_readvariableop_dense_dense2_bias*
_output_shapes
:
*
dtype02
BiasAdd/ReadVariableOp
BiasAddBiasAddMatMul:product:0BiasAdd/ReadVariableOp:value:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2	
BiasAdda
SoftmaxSoftmaxBiasAdd:output:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2	
Softmax
IdentityIdentitySoftmax:softmax:0^BiasAdd/ReadVariableOp^MatMul/ReadVariableOp*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*+
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : 20
BiasAdd/ReadVariableOpBiasAdd/ReadVariableOp2.
MatMul/ReadVariableOpMatMul/ReadVariableOp:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs
þ
µ
__inference__traced_save_322
file_prefix2
.savev2_dense_dense1_kernel_read_readvariableop0
,savev2_dense_dense1_bias_read_readvariableop2
.savev2_dense_dense2_kernel_read_readvariableop0
,savev2_dense_dense2_bias_read_readvariableop
savev2_const

identity_1¢MergeV2Checkpoints
StaticRegexFullMatchStaticRegexFullMatchfile_prefix"/device:CPU:**
_output_shapes
: *
pattern
^s3://.*2
StaticRegexFullMatchc
ConstConst"/device:CPU:**
_output_shapes
: *
dtype0*
valueB B.part2
Constl
Const_1Const"/device:CPU:**
_output_shapes
: *
dtype0*
valueB B
_temp/part2	
Const_1
SelectSelectStaticRegexFullMatch:output:0Const:output:0Const_1:output:0"/device:CPU:**
T0*
_output_shapes
: 2
Selectt

StringJoin
StringJoinfile_prefixSelect:output:0"/device:CPU:**
N*
_output_shapes
: 2

StringJoinZ

num_shardsConst*
_output_shapes
: *
dtype0*
value	B :2

num_shards
ShardedFilename/shardConst"/device:CPU:0*
_output_shapes
: *
dtype0*
value	B : 2
ShardedFilename/shard¦
ShardedFilenameShardedFilenameStringJoin:output:0ShardedFilename/shard:output:0num_shards:output:0"/device:CPU:0*
_output_shapes
: 2
ShardedFilenameý
SaveV2/tensor_namesConst"/device:CPU:0*
_output_shapes
:*
dtype0*
valueBB6layer_with_weights-0/kernel/.ATTRIBUTES/VARIABLE_VALUEB4layer_with_weights-0/bias/.ATTRIBUTES/VARIABLE_VALUEB6layer_with_weights-1/kernel/.ATTRIBUTES/VARIABLE_VALUEB4layer_with_weights-1/bias/.ATTRIBUTES/VARIABLE_VALUEB_CHECKPOINTABLE_OBJECT_GRAPH2
SaveV2/tensor_names
SaveV2/shape_and_slicesConst"/device:CPU:0*
_output_shapes
:*
dtype0*
valueBB B B B B 2
SaveV2/shape_and_slicesú
SaveV2SaveV2ShardedFilename:filename:0SaveV2/tensor_names:output:0 SaveV2/shape_and_slices:output:0.savev2_dense_dense1_kernel_read_readvariableop,savev2_dense_dense1_bias_read_readvariableop.savev2_dense_dense2_kernel_read_readvariableop,savev2_dense_dense2_bias_read_readvariableopsavev2_const"/device:CPU:0*
_output_shapes
 *
dtypes	
22
SaveV2º
&MergeV2Checkpoints/checkpoint_prefixesPackShardedFilename:filename:0^SaveV2"/device:CPU:0*
N*
T0*
_output_shapes
:2(
&MergeV2Checkpoints/checkpoint_prefixes¡
MergeV2CheckpointsMergeV2Checkpoints/MergeV2Checkpoints/checkpoint_prefixes:output:0file_prefix"/device:CPU:0*
_output_shapes
 2
MergeV2Checkpointsr
IdentityIdentityfile_prefix^MergeV2Checkpoints"/device:CPU:0*
T0*
_output_shapes
: 2

Identitym

Identity_1IdentityIdentity:output:0^MergeV2Checkpoints*
T0*
_output_shapes
: 2

Identity_1"!

identity_1Identity_1:output:0*;
_input_shapes*
(: :
::	
:
: 2(
MergeV2CheckpointsMergeV2Checkpoints:C ?

_output_shapes
: 
%
_user_specified_namefile_prefix:&"
 
_output_shapes
:
:!

_output_shapes	
::%!

_output_shapes
:	
: 

_output_shapes
:
:

_output_shapes
: 

è
__inference__wrapped_model_68
dense_dense1_inputW
Csequential_1_dense_dense1_matmul_readvariableop_dense_dense1_kernel:
Q
Bsequential_1_dense_dense1_biasadd_readvariableop_dense_dense1_bias:	V
Csequential_1_dense_dense2_matmul_readvariableop_dense_dense2_kernel:	
P
Bsequential_1_dense_dense2_biasadd_readvariableop_dense_dense2_bias:

identity¢0sequential_1/dense_Dense1/BiasAdd/ReadVariableOp¢/sequential_1/dense_Dense1/MatMul/ReadVariableOp¢0sequential_1/dense_Dense2/BiasAdd/ReadVariableOp¢/sequential_1/dense_Dense2/MatMul/ReadVariableOpè
/sequential_1/dense_Dense1/MatMul/ReadVariableOpReadVariableOpCsequential_1_dense_dense1_matmul_readvariableop_dense_dense1_kernel* 
_output_shapes
:
*
dtype021
/sequential_1/dense_Dense1/MatMul/ReadVariableOpÎ
 sequential_1/dense_Dense1/MatMulMatMuldense_dense1_input7sequential_1/dense_Dense1/MatMul/ReadVariableOp:value:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2"
 sequential_1/dense_Dense1/MatMulä
0sequential_1/dense_Dense1/BiasAdd/ReadVariableOpReadVariableOpBsequential_1_dense_dense1_biasadd_readvariableop_dense_dense1_bias*
_output_shapes	
:*
dtype022
0sequential_1/dense_Dense1/BiasAdd/ReadVariableOpê
!sequential_1/dense_Dense1/BiasAddBiasAdd*sequential_1/dense_Dense1/MatMul:product:08sequential_1/dense_Dense1/BiasAdd/ReadVariableOp:value:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2#
!sequential_1/dense_Dense1/BiasAdd§
sequential_1/dense_Dense1/ReluRelu*sequential_1/dense_Dense1/BiasAdd:output:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2 
sequential_1/dense_Dense1/Reluç
/sequential_1/dense_Dense2/MatMul/ReadVariableOpReadVariableOpCsequential_1_dense_dense2_matmul_readvariableop_dense_dense2_kernel*
_output_shapes
:	
*
dtype021
/sequential_1/dense_Dense2/MatMul/ReadVariableOpç
 sequential_1/dense_Dense2/MatMulMatMul,sequential_1/dense_Dense1/Relu:activations:07sequential_1/dense_Dense2/MatMul/ReadVariableOp:value:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2"
 sequential_1/dense_Dense2/MatMulã
0sequential_1/dense_Dense2/BiasAdd/ReadVariableOpReadVariableOpBsequential_1_dense_dense2_biasadd_readvariableop_dense_dense2_bias*
_output_shapes
:
*
dtype022
0sequential_1/dense_Dense2/BiasAdd/ReadVariableOpé
!sequential_1/dense_Dense2/BiasAddBiasAdd*sequential_1/dense_Dense2/MatMul:product:08sequential_1/dense_Dense2/BiasAdd/ReadVariableOp:value:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2#
!sequential_1/dense_Dense2/BiasAdd¯
!sequential_1/dense_Dense2/SoftmaxSoftmax*sequential_1/dense_Dense2/BiasAdd:output:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2#
!sequential_1/dense_Dense2/SoftmaxÉ
IdentityIdentity+sequential_1/dense_Dense2/Softmax:softmax:01^sequential_1/dense_Dense1/BiasAdd/ReadVariableOp0^sequential_1/dense_Dense1/MatMul/ReadVariableOp1^sequential_1/dense_Dense2/BiasAdd/ReadVariableOp0^sequential_1/dense_Dense2/MatMul/ReadVariableOp*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 2d
0sequential_1/dense_Dense1/BiasAdd/ReadVariableOp0sequential_1/dense_Dense1/BiasAdd/ReadVariableOp2b
/sequential_1/dense_Dense1/MatMul/ReadVariableOp/sequential_1/dense_Dense1/MatMul/ReadVariableOp2d
0sequential_1/dense_Dense2/BiasAdd/ReadVariableOp0sequential_1/dense_Dense2/BiasAdd/ReadVariableOp2b
/sequential_1/dense_Dense2/MatMul/ReadVariableOp/sequential_1/dense_Dense2/MatMul/ReadVariableOp:\ X
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
,
_user_specified_namedense_Dense1_input
Ñ

E__inference_sequential_1_layer_call_and_return_conditional_losses_215

inputsJ
6dense_dense1_matmul_readvariableop_dense_dense1_kernel:
D
5dense_dense1_biasadd_readvariableop_dense_dense1_bias:	I
6dense_dense2_matmul_readvariableop_dense_dense2_kernel:	
C
5dense_dense2_biasadd_readvariableop_dense_dense2_bias:

identity¢#dense_Dense1/BiasAdd/ReadVariableOp¢"dense_Dense1/MatMul/ReadVariableOp¢#dense_Dense2/BiasAdd/ReadVariableOp¢"dense_Dense2/MatMul/ReadVariableOpÁ
"dense_Dense1/MatMul/ReadVariableOpReadVariableOp6dense_dense1_matmul_readvariableop_dense_dense1_kernel* 
_output_shapes
:
*
dtype02$
"dense_Dense1/MatMul/ReadVariableOp
dense_Dense1/MatMulMatMulinputs*dense_Dense1/MatMul/ReadVariableOp:value:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2
dense_Dense1/MatMul½
#dense_Dense1/BiasAdd/ReadVariableOpReadVariableOp5dense_dense1_biasadd_readvariableop_dense_dense1_bias*
_output_shapes	
:*
dtype02%
#dense_Dense1/BiasAdd/ReadVariableOp¶
dense_Dense1/BiasAddBiasAdddense_Dense1/MatMul:product:0+dense_Dense1/BiasAdd/ReadVariableOp:value:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2
dense_Dense1/BiasAdd
dense_Dense1/ReluReludense_Dense1/BiasAdd:output:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2
dense_Dense1/ReluÀ
"dense_Dense2/MatMul/ReadVariableOpReadVariableOp6dense_dense2_matmul_readvariableop_dense_dense2_kernel*
_output_shapes
:	
*
dtype02$
"dense_Dense2/MatMul/ReadVariableOp³
dense_Dense2/MatMulMatMuldense_Dense1/Relu:activations:0*dense_Dense2/MatMul/ReadVariableOp:value:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2
dense_Dense2/MatMul¼
#dense_Dense2/BiasAdd/ReadVariableOpReadVariableOp5dense_dense2_biasadd_readvariableop_dense_dense2_bias*
_output_shapes
:
*
dtype02%
#dense_Dense2/BiasAdd/ReadVariableOpµ
dense_Dense2/BiasAddBiasAdddense_Dense2/MatMul:product:0+dense_Dense2/BiasAdd/ReadVariableOp:value:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2
dense_Dense2/BiasAdd
dense_Dense2/SoftmaxSoftmaxdense_Dense2/BiasAdd:output:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2
dense_Dense2/Softmax
IdentityIdentitydense_Dense2/Softmax:softmax:0$^dense_Dense1/BiasAdd/ReadVariableOp#^dense_Dense1/MatMul/ReadVariableOp$^dense_Dense2/BiasAdd/ReadVariableOp#^dense_Dense2/MatMul/ReadVariableOp*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 2J
#dense_Dense1/BiasAdd/ReadVariableOp#dense_Dense1/BiasAdd/ReadVariableOp2H
"dense_Dense1/MatMul/ReadVariableOp"dense_Dense1/MatMul/ReadVariableOp2J
#dense_Dense2/BiasAdd/ReadVariableOp#dense_Dense2/BiasAdd/ReadVariableOp2H
"dense_Dense2/MatMul/ReadVariableOp"dense_Dense2/MatMul/ReadVariableOp:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs
½

*__inference_sequential_1_layer_call_fn_113
dense_dense1_input'
dense_dense1_kernel:
 
dense_dense1_bias:	&
dense_dense2_kernel:	

dense_dense2_bias:

identity¢StatefulPartitionedCallÁ
StatefulPartitionedCallStatefulPartitionedCalldense_dense1_inputdense_dense1_kerneldense_dense1_biasdense_dense2_kerneldense_dense2_bias*
Tin	
2*
Tout
2*
_collective_manager_ids
 *'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
*&
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *N
fIRG
E__inference_sequential_1_layer_call_and_return_conditional_losses_1062
StatefulPartitionedCall
IdentityIdentity StatefulPartitionedCall:output:0^StatefulPartitionedCall*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 22
StatefulPartitionedCallStatefulPartitionedCall:\ X
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
,
_user_specified_namedense_Dense1_input

ú
!__inference_signature_wrapper_197
dense_dense1_input'
dense_dense1_kernel:
 
dense_dense1_bias:	&
dense_dense2_kernel:	

dense_dense2_bias:

identity¢StatefulPartitionedCall
StatefulPartitionedCallStatefulPartitionedCalldense_dense1_inputdense_dense1_kerneldense_dense1_biasdense_dense2_kerneldense_dense2_bias*
Tin	
2*
Tout
2*
_collective_manager_ids
 *'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
*&
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *&
f!R
__inference__wrapped_model_682
StatefulPartitionedCall
IdentityIdentity StatefulPartitionedCall:output:0^StatefulPartitionedCall*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 22
StatefulPartitionedCallStatefulPartitionedCall:\ X
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
,
_user_specified_namedense_Dense1_input
Ñ

E__inference_sequential_1_layer_call_and_return_conditional_losses_233

inputsJ
6dense_dense1_matmul_readvariableop_dense_dense1_kernel:
D
5dense_dense1_biasadd_readvariableop_dense_dense1_bias:	I
6dense_dense2_matmul_readvariableop_dense_dense2_kernel:	
C
5dense_dense2_biasadd_readvariableop_dense_dense2_bias:

identity¢#dense_Dense1/BiasAdd/ReadVariableOp¢"dense_Dense1/MatMul/ReadVariableOp¢#dense_Dense2/BiasAdd/ReadVariableOp¢"dense_Dense2/MatMul/ReadVariableOpÁ
"dense_Dense1/MatMul/ReadVariableOpReadVariableOp6dense_dense1_matmul_readvariableop_dense_dense1_kernel* 
_output_shapes
:
*
dtype02$
"dense_Dense1/MatMul/ReadVariableOp
dense_Dense1/MatMulMatMulinputs*dense_Dense1/MatMul/ReadVariableOp:value:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2
dense_Dense1/MatMul½
#dense_Dense1/BiasAdd/ReadVariableOpReadVariableOp5dense_dense1_biasadd_readvariableop_dense_dense1_bias*
_output_shapes	
:*
dtype02%
#dense_Dense1/BiasAdd/ReadVariableOp¶
dense_Dense1/BiasAddBiasAdddense_Dense1/MatMul:product:0+dense_Dense1/BiasAdd/ReadVariableOp:value:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2
dense_Dense1/BiasAdd
dense_Dense1/ReluReludense_Dense1/BiasAdd:output:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2
dense_Dense1/ReluÀ
"dense_Dense2/MatMul/ReadVariableOpReadVariableOp6dense_dense2_matmul_readvariableop_dense_dense2_kernel*
_output_shapes
:	
*
dtype02$
"dense_Dense2/MatMul/ReadVariableOp³
dense_Dense2/MatMulMatMuldense_Dense1/Relu:activations:0*dense_Dense2/MatMul/ReadVariableOp:value:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2
dense_Dense2/MatMul¼
#dense_Dense2/BiasAdd/ReadVariableOpReadVariableOp5dense_dense2_biasadd_readvariableop_dense_dense2_bias*
_output_shapes
:
*
dtype02%
#dense_Dense2/BiasAdd/ReadVariableOpµ
dense_Dense2/BiasAddBiasAdddense_Dense2/MatMul:product:0+dense_Dense2/BiasAdd/ReadVariableOp:value:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2
dense_Dense2/BiasAdd
dense_Dense2/SoftmaxSoftmaxdense_Dense2/BiasAdd:output:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2
dense_Dense2/Softmax
IdentityIdentitydense_Dense2/Softmax:softmax:0$^dense_Dense1/BiasAdd/ReadVariableOp#^dense_Dense1/MatMul/ReadVariableOp$^dense_Dense2/BiasAdd/ReadVariableOp#^dense_Dense2/MatMul/ReadVariableOp*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 2J
#dense_Dense1/BiasAdd/ReadVariableOp#dense_Dense1/BiasAdd/ReadVariableOp2H
"dense_Dense1/MatMul/ReadVariableOp"dense_Dense1/MatMul/ReadVariableOp2J
#dense_Dense2/BiasAdd/ReadVariableOp#dense_Dense2/BiasAdd/ReadVariableOp2H
"dense_Dense2/MatMul/ReadVariableOp"dense_Dense2/MatMul/ReadVariableOp:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs
´
ú
E__inference_sequential_1_layer_call_and_return_conditional_losses_150

inputs4
 dense_dense1_dense_dense1_kernel:
-
dense_dense1_dense_dense1_bias:	3
 dense_dense2_dense_dense2_kernel:	
,
dense_dense2_dense_dense2_bias:

identity¢$dense_Dense1/StatefulPartitionedCall¢$dense_Dense2/StatefulPartitionedCall½
$dense_Dense1/StatefulPartitionedCallStatefulPartitionedCallinputs dense_dense1_dense_dense1_kerneldense_dense1_dense_dense1_bias*
Tin
2*
Tout
2*
_collective_manager_ids
 *(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ*$
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *M
fHRF
D__inference_dense_Dense1_layer_call_and_return_conditional_losses_862&
$dense_Dense1/StatefulPartitionedCallä
$dense_Dense2/StatefulPartitionedCallStatefulPartitionedCall-dense_Dense1/StatefulPartitionedCall:output:0 dense_dense2_dense_dense2_kerneldense_dense2_dense_dense2_bias*
Tin
2*
Tout
2*
_collective_manager_ids
 *'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
*$
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *N
fIRG
E__inference_dense_Dense2_layer_call_and_return_conditional_losses_1012&
$dense_Dense2/StatefulPartitionedCallÏ
IdentityIdentity-dense_Dense2/StatefulPartitionedCall:output:0%^dense_Dense1/StatefulPartitionedCall%^dense_Dense2/StatefulPartitionedCall*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 2L
$dense_Dense1/StatefulPartitionedCall$dense_Dense1/StatefulPartitionedCall2L
$dense_Dense2/StatefulPartitionedCall$dense_Dense2/StatefulPartitionedCall:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs

÷
*__inference_sequential_1_layer_call_fn_242

inputs'
dense_dense1_kernel:
 
dense_dense1_bias:	&
dense_dense2_kernel:	

dense_dense2_bias:

identity¢StatefulPartitionedCallµ
StatefulPartitionedCallStatefulPartitionedCallinputsdense_dense1_kerneldense_dense1_biasdense_dense2_kerneldense_dense2_bias*
Tin	
2*
Tout
2*
_collective_manager_ids
 *'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
*&
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *N
fIRG
E__inference_sequential_1_layer_call_and_return_conditional_losses_1062
StatefulPartitionedCall
IdentityIdentity StatefulPartitionedCall:output:0^StatefulPartitionedCall*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 22
StatefulPartitionedCallStatefulPartitionedCall:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs
´
ú
E__inference_sequential_1_layer_call_and_return_conditional_losses_106

inputs4
 dense_dense1_dense_dense1_kernel:
-
dense_dense1_dense_dense1_bias:	3
 dense_dense2_dense_dense2_kernel:	
,
dense_dense2_dense_dense2_bias:

identity¢$dense_Dense1/StatefulPartitionedCall¢$dense_Dense2/StatefulPartitionedCall½
$dense_Dense1/StatefulPartitionedCallStatefulPartitionedCallinputs dense_dense1_dense_dense1_kerneldense_dense1_dense_dense1_bias*
Tin
2*
Tout
2*
_collective_manager_ids
 *(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ*$
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *M
fHRF
D__inference_dense_Dense1_layer_call_and_return_conditional_losses_862&
$dense_Dense1/StatefulPartitionedCallä
$dense_Dense2/StatefulPartitionedCallStatefulPartitionedCall-dense_Dense1/StatefulPartitionedCall:output:0 dense_dense2_dense_dense2_kerneldense_dense2_dense_dense2_bias*
Tin
2*
Tout
2*
_collective_manager_ids
 *'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
*$
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *N
fIRG
E__inference_dense_Dense2_layer_call_and_return_conditional_losses_1012&
$dense_Dense2/StatefulPartitionedCallÏ
IdentityIdentity-dense_Dense2/StatefulPartitionedCall:output:0%^dense_Dense1/StatefulPartitionedCall%^dense_Dense2/StatefulPartitionedCall*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 2L
$dense_Dense1/StatefulPartitionedCall$dense_Dense1/StatefulPartitionedCall2L
$dense_Dense2/StatefulPartitionedCall$dense_Dense2/StatefulPartitionedCall:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs
Ø

E__inference_sequential_1_layer_call_and_return_conditional_losses_176
dense_dense1_input4
 dense_dense1_dense_dense1_kernel:
-
dense_dense1_dense_dense1_bias:	3
 dense_dense2_dense_dense2_kernel:	
,
dense_dense2_dense_dense2_bias:

identity¢$dense_Dense1/StatefulPartitionedCall¢$dense_Dense2/StatefulPartitionedCallÉ
$dense_Dense1/StatefulPartitionedCallStatefulPartitionedCalldense_dense1_input dense_dense1_dense_dense1_kerneldense_dense1_dense_dense1_bias*
Tin
2*
Tout
2*
_collective_manager_ids
 *(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ*$
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *M
fHRF
D__inference_dense_Dense1_layer_call_and_return_conditional_losses_862&
$dense_Dense1/StatefulPartitionedCallä
$dense_Dense2/StatefulPartitionedCallStatefulPartitionedCall-dense_Dense1/StatefulPartitionedCall:output:0 dense_dense2_dense_dense2_kerneldense_dense2_dense_dense2_bias*
Tin
2*
Tout
2*
_collective_manager_ids
 *'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
*$
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *N
fIRG
E__inference_dense_Dense2_layer_call_and_return_conditional_losses_1012&
$dense_Dense2/StatefulPartitionedCallÏ
IdentityIdentity-dense_Dense2/StatefulPartitionedCall:output:0%^dense_Dense1/StatefulPartitionedCall%^dense_Dense2/StatefulPartitionedCall*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 2L
$dense_Dense1/StatefulPartitionedCall$dense_Dense1/StatefulPartitionedCall2L
$dense_Dense2/StatefulPartitionedCall$dense_Dense2/StatefulPartitionedCall:\ X
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
,
_user_specified_namedense_Dense1_input

õ
__inference__traced_restore_344
file_prefix8
$assignvariableop_dense_dense1_kernel:
3
$assignvariableop_1_dense_dense1_bias:	9
&assignvariableop_2_dense_dense2_kernel:	
2
$assignvariableop_3_dense_dense2_bias:


identity_5¢AssignVariableOp¢AssignVariableOp_1¢AssignVariableOp_2¢AssignVariableOp_3
RestoreV2/tensor_namesConst"/device:CPU:0*
_output_shapes
:*
dtype0*
valueBB6layer_with_weights-0/kernel/.ATTRIBUTES/VARIABLE_VALUEB4layer_with_weights-0/bias/.ATTRIBUTES/VARIABLE_VALUEB6layer_with_weights-1/kernel/.ATTRIBUTES/VARIABLE_VALUEB4layer_with_weights-1/bias/.ATTRIBUTES/VARIABLE_VALUEB_CHECKPOINTABLE_OBJECT_GRAPH2
RestoreV2/tensor_names
RestoreV2/shape_and_slicesConst"/device:CPU:0*
_output_shapes
:*
dtype0*
valueBB B B B B 2
RestoreV2/shape_and_slicesÄ
	RestoreV2	RestoreV2file_prefixRestoreV2/tensor_names:output:0#RestoreV2/shape_and_slices:output:0"/device:CPU:0*(
_output_shapes
:::::*
dtypes	
22
	RestoreV2g
IdentityIdentityRestoreV2:tensors:0"/device:CPU:0*
T0*
_output_shapes
:2

Identity£
AssignVariableOpAssignVariableOp$assignvariableop_dense_dense1_kernelIdentity:output:0"/device:CPU:0*
_output_shapes
 *
dtype02
AssignVariableOpk

Identity_1IdentityRestoreV2:tensors:1"/device:CPU:0*
T0*
_output_shapes
:2

Identity_1©
AssignVariableOp_1AssignVariableOp$assignvariableop_1_dense_dense1_biasIdentity_1:output:0"/device:CPU:0*
_output_shapes
 *
dtype02
AssignVariableOp_1k

Identity_2IdentityRestoreV2:tensors:2"/device:CPU:0*
T0*
_output_shapes
:2

Identity_2«
AssignVariableOp_2AssignVariableOp&assignvariableop_2_dense_dense2_kernelIdentity_2:output:0"/device:CPU:0*
_output_shapes
 *
dtype02
AssignVariableOp_2k

Identity_3IdentityRestoreV2:tensors:3"/device:CPU:0*
T0*
_output_shapes
:2

Identity_3©
AssignVariableOp_3AssignVariableOp$assignvariableop_3_dense_dense2_biasIdentity_3:output:0"/device:CPU:0*
_output_shapes
 *
dtype02
AssignVariableOp_39
NoOpNoOp"/device:CPU:0*
_output_shapes
 2
NoOpº

Identity_4Identityfile_prefix^AssignVariableOp^AssignVariableOp_1^AssignVariableOp_2^AssignVariableOp_3^NoOp"/device:CPU:0*
T0*
_output_shapes
: 2

Identity_4¬

Identity_5IdentityIdentity_4:output:0^AssignVariableOp^AssignVariableOp_1^AssignVariableOp_2^AssignVariableOp_3*
T0*
_output_shapes
: 2

Identity_5"!

identity_5Identity_5:output:0*
_input_shapes

: : : : : 2$
AssignVariableOpAssignVariableOp2(
AssignVariableOp_1AssignVariableOp_12(
AssignVariableOp_2AssignVariableOp_22(
AssignVariableOp_3AssignVariableOp_3:C ?

_output_shapes
: 
%
_user_specified_namefile_prefix
·


E__inference_dense_Dense1_layer_call_and_return_conditional_losses_262

inputs=
)matmul_readvariableop_dense_dense1_kernel:
7
(biasadd_readvariableop_dense_dense1_bias:	
identity¢BiasAdd/ReadVariableOp¢MatMul/ReadVariableOp
MatMul/ReadVariableOpReadVariableOp)matmul_readvariableop_dense_dense1_kernel* 
_output_shapes
:
*
dtype02
MatMul/ReadVariableOpt
MatMulMatMulinputsMatMul/ReadVariableOp:value:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2
MatMul
BiasAdd/ReadVariableOpReadVariableOp(biasadd_readvariableop_dense_dense1_bias*
_output_shapes	
:*
dtype02
BiasAdd/ReadVariableOp
BiasAddBiasAddMatMul:product:0BiasAdd/ReadVariableOp:value:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2	
BiasAddY
ReluReluBiasAdd:output:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2
Relu
IdentityIdentityRelu:activations:0^BiasAdd/ReadVariableOp^MatMul/ReadVariableOp*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2

Identity"
identityIdentity:output:0*+
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : 20
BiasAdd/ReadVariableOpBiasAdd/ReadVariableOp2.
MatMul/ReadVariableOpMatMul/ReadVariableOp:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs
·


E__inference_dense_Dense2_layer_call_and_return_conditional_losses_101

inputs<
)matmul_readvariableop_dense_dense2_kernel:	
6
(biasadd_readvariableop_dense_dense2_bias:

identity¢BiasAdd/ReadVariableOp¢MatMul/ReadVariableOp
MatMul/ReadVariableOpReadVariableOp)matmul_readvariableop_dense_dense2_kernel*
_output_shapes
:	
*
dtype02
MatMul/ReadVariableOps
MatMulMatMulinputsMatMul/ReadVariableOp:value:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2
MatMul
BiasAdd/ReadVariableOpReadVariableOp(biasadd_readvariableop_dense_dense2_bias*
_output_shapes
:
*
dtype02
BiasAdd/ReadVariableOp
BiasAddBiasAddMatMul:product:0BiasAdd/ReadVariableOp:value:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2	
BiasAdda
SoftmaxSoftmaxBiasAdd:output:0*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2	
Softmax
IdentityIdentitySoftmax:softmax:0^BiasAdd/ReadVariableOp^MatMul/ReadVariableOp*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*+
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : 20
BiasAdd/ReadVariableOpBiasAdd/ReadVariableOp2.
MatMul/ReadVariableOpMatMul/ReadVariableOp:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs
¶


D__inference_dense_Dense1_layer_call_and_return_conditional_losses_86

inputs=
)matmul_readvariableop_dense_dense1_kernel:
7
(biasadd_readvariableop_dense_dense1_bias:	
identity¢BiasAdd/ReadVariableOp¢MatMul/ReadVariableOp
MatMul/ReadVariableOpReadVariableOp)matmul_readvariableop_dense_dense1_kernel* 
_output_shapes
:
*
dtype02
MatMul/ReadVariableOpt
MatMulMatMulinputsMatMul/ReadVariableOp:value:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2
MatMul
BiasAdd/ReadVariableOpReadVariableOp(biasadd_readvariableop_dense_dense1_bias*
_output_shapes	
:*
dtype02
BiasAdd/ReadVariableOp
BiasAddBiasAddMatMul:product:0BiasAdd/ReadVariableOp:value:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2	
BiasAddY
ReluReluBiasAdd:output:0*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2
Relu
IdentityIdentityRelu:activations:0^BiasAdd/ReadVariableOp^MatMul/ReadVariableOp*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2

Identity"
identityIdentity:output:0*+
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : 20
BiasAdd/ReadVariableOpBiasAdd/ReadVariableOp2.
MatMul/ReadVariableOpMatMul/ReadVariableOp:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs
½

*__inference_sequential_1_layer_call_fn_166
dense_dense1_input'
dense_dense1_kernel:
 
dense_dense1_bias:	&
dense_dense2_kernel:	

dense_dense2_bias:

identity¢StatefulPartitionedCallÁ
StatefulPartitionedCallStatefulPartitionedCalldense_dense1_inputdense_dense1_kerneldense_dense1_biasdense_dense2_kerneldense_dense2_bias*
Tin	
2*
Tout
2*
_collective_manager_ids
 *'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
*&
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *N
fIRG
E__inference_sequential_1_layer_call_and_return_conditional_losses_1502
StatefulPartitionedCall
IdentityIdentity StatefulPartitionedCall:output:0^StatefulPartitionedCall*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 22
StatefulPartitionedCallStatefulPartitionedCall:\ X
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
,
_user_specified_namedense_Dense1_input
¡
®
*__inference_dense_Dense1_layer_call_fn_269

inputs'
dense_dense1_kernel:
 
dense_dense1_bias:	
identity¢StatefulPartitionedCall
StatefulPartitionedCallStatefulPartitionedCallinputsdense_dense1_kerneldense_dense1_bias*
Tin
2*
Tout
2*
_collective_manager_ids
 *(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ*$
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *M
fHRF
D__inference_dense_Dense1_layer_call_and_return_conditional_losses_862
StatefulPartitionedCall
IdentityIdentity StatefulPartitionedCall:output:0^StatefulPartitionedCall*
T0*(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ2

Identity"
identityIdentity:output:0*+
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : 22
StatefulPartitionedCallStatefulPartitionedCall:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs

÷
*__inference_sequential_1_layer_call_fn_251

inputs'
dense_dense1_kernel:
 
dense_dense1_bias:	&
dense_dense2_kernel:	

dense_dense2_bias:

identity¢StatefulPartitionedCallµ
StatefulPartitionedCallStatefulPartitionedCallinputsdense_dense1_kerneldense_dense1_biasdense_dense2_kerneldense_dense2_bias*
Tin	
2*
Tout
2*
_collective_manager_ids
 *'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
*&
_read_only_resource_inputs
*-
config_proto

CPU

GPU 2J 8 *N
fIRG
E__inference_sequential_1_layer_call_and_return_conditional_losses_1502
StatefulPartitionedCall
IdentityIdentity StatefulPartitionedCall:output:0^StatefulPartitionedCall*
T0*'
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
2

Identity"
identityIdentity:output:0*/
_input_shapes
:ÿÿÿÿÿÿÿÿÿ: : : : 22
StatefulPartitionedCallStatefulPartitionedCall:P L
(
_output_shapes
:ÿÿÿÿÿÿÿÿÿ
 
_user_specified_nameinputs"ÌL
saver_filename:0StatefulPartitionedCall_1:0StatefulPartitionedCall_28"
saved_model_main_op

NoOp*>
__saved_model_init_op%#
__saved_model_init_op

NoOp*Æ
serving_default²
R
dense_Dense1_input<
$serving_default_dense_Dense1_input:0ÿÿÿÿÿÿÿÿÿ@
dense_Dense20
StatefulPartitionedCall:0ÿÿÿÿÿÿÿÿÿ
tensorflow/serving/predict:ñd

layer_with_weights-0
layer-0
layer_with_weights-1
layer-1
regularization_losses
trainable_variables
	variables
	keras_api

signatures
*#&call_and_return_all_conditional_losses
$_default_save_signature
%__call__"ü
_tf_keras_sequentialÝ{"name": "sequential_1", "trainable": true, "expects_training_arg": true, "dtype": "float32", "batch_input_shape": null, "must_restore_from_config": false, "class_name": "Sequential", "config": {"name": "sequential_1", "layers": [{"class_name": "InputLayer", "config": {"batch_input_shape": {"class_name": "__tuple__", "items": [null, 784]}, "dtype": "float32", "sparse": false, "ragged": false, "name": "dense_Dense1_input"}}, {"class_name": "Dense", "config": {"name": "dense_Dense1", "trainable": true, "batch_input_shape": {"class_name": "__tuple__", "items": [null, 784]}, "dtype": "float32", "units": 128, "activation": "relu", "use_bias": true, "kernel_initializer": {"class_name": "VarianceScaling", "config": {"scale": 1, "mode": "fan_avg", "distribution": "truncated_normal", "seed": null}}, "bias_initializer": {"class_name": "Zeros", "config": {}}, "kernel_regularizer": null, "bias_regularizer": null, "activity_regularizer": null, "kernel_constraint": null, "bias_constraint": null}}, {"class_name": "Dense", "config": {"name": "dense_Dense2", "trainable": true, "dtype": "float32", "units": 10, "activation": "softmax", "use_bias": true, "kernel_initializer": {"class_name": "VarianceScaling", "config": {"scale": 1, "mode": "fan_avg", "distribution": "truncated_normal", "seed": null}}, "bias_initializer": {"class_name": "Zeros", "config": {}}, "kernel_regularizer": null, "bias_regularizer": null, "activity_regularizer": null, "kernel_constraint": null, "bias_constraint": null}}]}, "shared_object_id": 7, "input_spec": {"class_name": "InputSpec", "config": {"dtype": null, "shape": null, "ndim": null, "max_ndim": null, "min_ndim": 2, "axes": {"-1": 784}}, "shared_object_id": 8}, "build_input_shape": {"class_name": "TensorShape", "items": [null, 784]}, "is_graph_network": true, "save_spec": {"class_name": "TypeSpec", "type_spec": "tf.TensorSpec", "serialized": [{"class_name": "TensorShape", "items": [null, 784]}, "float32", "dense_Dense1_input"]}, "keras_version": "2.5.0", "backend": "tensorflow", "model_config": {"class_name": "Sequential", "config": {"name": "sequential_1", "layers": [{"class_name": "InputLayer", "config": {"batch_input_shape": {"class_name": "__tuple__", "items": [null, 784]}, "dtype": "float32", "sparse": false, "ragged": false, "name": "dense_Dense1_input"}, "shared_object_id": 0}, {"class_name": "Dense", "config": {"name": "dense_Dense1", "trainable": true, "batch_input_shape": {"class_name": "__tuple__", "items": [null, 784]}, "dtype": "float32", "units": 128, "activation": "relu", "use_bias": true, "kernel_initializer": {"class_name": "VarianceScaling", "config": {"scale": 1, "mode": "fan_avg", "distribution": "truncated_normal", "seed": null}, "shared_object_id": 1}, "bias_initializer": {"class_name": "Zeros", "config": {}, "shared_object_id": 2}, "kernel_regularizer": null, "bias_regularizer": null, "activity_regularizer": null, "kernel_constraint": null, "bias_constraint": null}, "shared_object_id": 3}, {"class_name": "Dense", "config": {"name": "dense_Dense2", "trainable": true, "dtype": "float32", "units": 10, "activation": "softmax", "use_bias": true, "kernel_initializer": {"class_name": "VarianceScaling", "config": {"scale": 1, "mode": "fan_avg", "distribution": "truncated_normal", "seed": null}, "shared_object_id": 4}, "bias_initializer": {"class_name": "Zeros", "config": {}, "shared_object_id": 5}, "kernel_regularizer": null, "bias_regularizer": null, "activity_regularizer": null, "kernel_constraint": null, "bias_constraint": null}, "shared_object_id": 6}]}}}



kernel
	bias

regularization_losses
trainable_variables
	variables
	keras_api
*&&call_and_return_all_conditional_losses
'__call__"î
_tf_keras_layerÔ{"name": "dense_Dense1", "trainable": true, "expects_training_arg": false, "dtype": "float32", "batch_input_shape": {"class_name": "__tuple__", "items": [null, 784]}, "stateful": false, "must_restore_from_config": false, "class_name": "Dense", "config": {"name": "dense_Dense1", "trainable": true, "batch_input_shape": {"class_name": "__tuple__", "items": [null, 784]}, "dtype": "float32", "units": 128, "activation": "relu", "use_bias": true, "kernel_initializer": {"class_name": "VarianceScaling", "config": {"scale": 1, "mode": "fan_avg", "distribution": "truncated_normal", "seed": null}, "shared_object_id": 1}, "bias_initializer": {"class_name": "Zeros", "config": {}, "shared_object_id": 2}, "kernel_regularizer": null, "bias_regularizer": null, "activity_regularizer": null, "kernel_constraint": null, "bias_constraint": null}, "shared_object_id": 3, "input_spec": {"class_name": "InputSpec", "config": {"dtype": null, "shape": null, "ndim": null, "max_ndim": null, "min_ndim": 2, "axes": {"-1": 784}}, "shared_object_id": 8}, "build_input_shape": {"class_name": "TensorShape", "items": [null, 784]}}
 	

kernel
bias
regularization_losses
trainable_variables
	variables
	keras_api
*(&call_and_return_all_conditional_losses
)__call__"û
_tf_keras_layerá{"name": "dense_Dense2", "trainable": true, "expects_training_arg": false, "dtype": "float32", "batch_input_shape": null, "stateful": false, "must_restore_from_config": false, "class_name": "Dense", "config": {"name": "dense_Dense2", "trainable": true, "dtype": "float32", "units": 10, "activation": "softmax", "use_bias": true, "kernel_initializer": {"class_name": "VarianceScaling", "config": {"scale": 1, "mode": "fan_avg", "distribution": "truncated_normal", "seed": null}, "shared_object_id": 4}, "bias_initializer": {"class_name": "Zeros", "config": {}, "shared_object_id": 5}, "kernel_regularizer": null, "bias_regularizer": null, "activity_regularizer": null, "kernel_constraint": null, "bias_constraint": null}, "shared_object_id": 6, "input_spec": {"class_name": "InputSpec", "config": {"dtype": null, "shape": null, "ndim": null, "max_ndim": null, "min_ndim": 2, "axes": {"-1": 128}}, "shared_object_id": 9}, "build_input_shape": {"class_name": "TensorShape", "items": [null, 128]}}
 "
trackable_list_wrapper
<
0
	1
2
3"
trackable_list_wrapper
<
0
	1
2
3"
trackable_list_wrapper
Ê
regularization_losses
trainable_variables
metrics
non_trainable_variables

layers
layer_regularization_losses
	variables
layer_metrics
%__call__
$_default_save_signature
*#&call_and_return_all_conditional_losses
&#"call_and_return_conditional_losses"
_generic_user_object
,
*serving_default"
signature_map
':%
2dense_Dense1/kernel
 :2dense_Dense1/bias
 "
trackable_list_wrapper
.
0
	1"
trackable_list_wrapper
.
0
	1"
trackable_list_wrapper
­

regularization_losses
trainable_variables
metrics
non_trainable_variables

layers
layer_regularization_losses
	variables
layer_metrics
'__call__
*&&call_and_return_all_conditional_losses
&&"call_and_return_conditional_losses"
_generic_user_object
&:$	
2dense_Dense2/kernel
:
2dense_Dense2/bias
 "
trackable_list_wrapper
.
0
1"
trackable_list_wrapper
.
0
1"
trackable_list_wrapper
­
regularization_losses
trainable_variables
metrics
non_trainable_variables

 layers
!layer_regularization_losses
	variables
"layer_metrics
)__call__
*(&call_and_return_all_conditional_losses
&("call_and_return_conditional_losses"
_generic_user_object
 "
trackable_list_wrapper
 "
trackable_list_wrapper
.
0
1"
trackable_list_wrapper
 "
trackable_list_wrapper
 "
trackable_dict_wrapper
 "
trackable_list_wrapper
 "
trackable_list_wrapper
 "
trackable_list_wrapper
 "
trackable_list_wrapper
 "
trackable_dict_wrapper
 "
trackable_list_wrapper
 "
trackable_list_wrapper
 "
trackable_list_wrapper
 "
trackable_list_wrapper
 "
trackable_dict_wrapper
â2ß
E__inference_sequential_1_layer_call_and_return_conditional_losses_215
E__inference_sequential_1_layer_call_and_return_conditional_losses_233
E__inference_sequential_1_layer_call_and_return_conditional_losses_176
E__inference_sequential_1_layer_call_and_return_conditional_losses_186À
·²³
FullArgSpec1
args)&
jself
jinputs

jtraining
jmask
varargs
 
varkw
 
defaults
p 

 

kwonlyargs 
kwonlydefaultsª 
annotationsª *
 
ç2ä
__inference__wrapped_model_68Â
²
FullArgSpec
args 
varargsjargs
varkw
 
defaults
 

kwonlyargs 
kwonlydefaults
 
annotationsª *2¢/
-*
dense_Dense1_inputÿÿÿÿÿÿÿÿÿ
ö2ó
*__inference_sequential_1_layer_call_fn_113
*__inference_sequential_1_layer_call_fn_242
*__inference_sequential_1_layer_call_fn_251
*__inference_sequential_1_layer_call_fn_166À
·²³
FullArgSpec1
args)&
jself
jinputs

jtraining
jmask
varargs
 
varkw
 
defaults
p 

 

kwonlyargs 
kwonlydefaultsª 
annotationsª *
 
ï2ì
E__inference_dense_Dense1_layer_call_and_return_conditional_losses_262¢
²
FullArgSpec
args
jself
jinputs
varargs
 
varkw
 
defaults
 

kwonlyargs 
kwonlydefaults
 
annotationsª *
 
Ô2Ñ
*__inference_dense_Dense1_layer_call_fn_269¢
²
FullArgSpec
args
jself
jinputs
varargs
 
varkw
 
defaults
 

kwonlyargs 
kwonlydefaults
 
annotationsª *
 
ï2ì
E__inference_dense_Dense2_layer_call_and_return_conditional_losses_280¢
²
FullArgSpec
args
jself
jinputs
varargs
 
varkw
 
defaults
 

kwonlyargs 
kwonlydefaults
 
annotationsª *
 
Ô2Ñ
*__inference_dense_Dense2_layer_call_fn_287¢
²
FullArgSpec
args
jself
jinputs
varargs
 
varkw
 
defaults
 

kwonlyargs 
kwonlydefaults
 
annotationsª *
 
ÓBÐ
!__inference_signature_wrapper_197dense_Dense1_input"
²
FullArgSpec
args 
varargs
 
varkwjkwargs
defaults
 

kwonlyargs 
kwonlydefaults
 
annotationsª *
 £
__inference__wrapped_model_68	<¢9
2¢/
-*
dense_Dense1_inputÿÿÿÿÿÿÿÿÿ
ª ";ª8
6
dense_Dense2&#
dense_Dense2ÿÿÿÿÿÿÿÿÿ
§
E__inference_dense_Dense1_layer_call_and_return_conditional_losses_262^	0¢-
&¢#
!
inputsÿÿÿÿÿÿÿÿÿ
ª "&¢#

0ÿÿÿÿÿÿÿÿÿ
 
*__inference_dense_Dense1_layer_call_fn_269Q	0¢-
&¢#
!
inputsÿÿÿÿÿÿÿÿÿ
ª "ÿÿÿÿÿÿÿÿÿ¦
E__inference_dense_Dense2_layer_call_and_return_conditional_losses_280]0¢-
&¢#
!
inputsÿÿÿÿÿÿÿÿÿ
ª "%¢"

0ÿÿÿÿÿÿÿÿÿ

 ~
*__inference_dense_Dense2_layer_call_fn_287P0¢-
&¢#
!
inputsÿÿÿÿÿÿÿÿÿ
ª "ÿÿÿÿÿÿÿÿÿ
¼
E__inference_sequential_1_layer_call_and_return_conditional_losses_176s	D¢A
:¢7
-*
dense_Dense1_inputÿÿÿÿÿÿÿÿÿ
p 

 
ª "%¢"

0ÿÿÿÿÿÿÿÿÿ

 ¼
E__inference_sequential_1_layer_call_and_return_conditional_losses_186s	D¢A
:¢7
-*
dense_Dense1_inputÿÿÿÿÿÿÿÿÿ
p

 
ª "%¢"

0ÿÿÿÿÿÿÿÿÿ

 °
E__inference_sequential_1_layer_call_and_return_conditional_losses_215g	8¢5
.¢+
!
inputsÿÿÿÿÿÿÿÿÿ
p 

 
ª "%¢"

0ÿÿÿÿÿÿÿÿÿ

 °
E__inference_sequential_1_layer_call_and_return_conditional_losses_233g	8¢5
.¢+
!
inputsÿÿÿÿÿÿÿÿÿ
p

 
ª "%¢"

0ÿÿÿÿÿÿÿÿÿ

 
*__inference_sequential_1_layer_call_fn_113f	D¢A
:¢7
-*
dense_Dense1_inputÿÿÿÿÿÿÿÿÿ
p 

 
ª "ÿÿÿÿÿÿÿÿÿ

*__inference_sequential_1_layer_call_fn_166f	D¢A
:¢7
-*
dense_Dense1_inputÿÿÿÿÿÿÿÿÿ
p

 
ª "ÿÿÿÿÿÿÿÿÿ

*__inference_sequential_1_layer_call_fn_242Z	8¢5
.¢+
!
inputsÿÿÿÿÿÿÿÿÿ
p 

 
ª "ÿÿÿÿÿÿÿÿÿ

*__inference_sequential_1_layer_call_fn_251Z	8¢5
.¢+
!
inputsÿÿÿÿÿÿÿÿÿ
p

 
ª "ÿÿÿÿÿÿÿÿÿ
½
!__inference_signature_wrapper_197	R¢O
¢ 
HªE
C
dense_Dense1_input-*
dense_Dense1_inputÿÿÿÿÿÿÿÿÿ";ª8
6
dense_Dense2&#
dense_Dense2ÿÿÿÿÿÿÿÿÿ
